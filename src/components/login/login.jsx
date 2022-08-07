import React, { useState } from "react";
import {
	CheckBox,
	Container,
	ErrorWindow,
	Input,
	Label,
	Others,
	Signin,
	Submit,
} from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { mutate } = useMutation((res) => {
		return fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
			method: "POST",
			headers: { "Content-type": "Application/json" },
			body: JSON.stringify({
				email,
				password,
			}),
		}).then((res) => res.json());
	});

	const onSubmit = () => {
		if (email?.length && password?.length) {
			mutate(
				{},
				{
					onSuccess: (res) => {
						if (res?.authenticationToken) {
							localStorage.setItem("token", res.authenticationToken);
							navigate("/home");
							setError(false);
						} else {
							setError("Email or password is wrong");
						}
					},
					onError: (err) => setError("Email or password is wrong"),
				}
			);
		} else {
			setError("Email or Password shouldn`t be empty");
		}
	};
	return (
		<Container>
			<Signin
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<h1 className="title" style={{ textAlign: "left" }}>
					Log in
				</h1>
				<Label for="email">Email</Label>
				<Input
					id="email"
					name="email"
					type={"email"}
					value={email}
					placeholder="Email"
					onChange={({ target: { value } }) => setEmail(value)}
				></Input>

				<Label for="password">Password</Label>
				<Input
					id="password"
					name="password"
					type={"password"}
					value={password}
					placeholder="Password"
					onChange={({ target: { value } }) => setPassword(value)}
				></Input>

				{error && <ErrorWindow>{error}</ErrorWindow>}

				<Others>
					<div>
						<CheckBox name="remember" id="remember" type="checkbox"></CheckBox>
						<Label style={{ color: " #696969" }} for="remember">
							Remember me
						</Label>
					</div>
					<NavLink to={"/"}>Forgot</NavLink>
				</Others>
				<Submit type={"submit"}>Login</Submit>
				<NavLink to={"/signup"}>
					Do you have an account? If not, register one.
				</NavLink>
			</Signin>
		</Container>
	);
};

export default Login;
