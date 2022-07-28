import React from "react";
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
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
	const Formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (value) => {
			fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
				method: "POST",
				headers: { "Content-type": "Application/json" },
				body: JSON.stringify({
					email: value.email,
					password: value.password,
				}),
			})
				.then((res) => res.json())
				.then((res) => res.username && alert("Logged Successfully"));
		},
		validationSchema: Yup.object({
			email: Yup.string().email().required("Please Enter your Email"),
			password: Yup.string().required("Please Enter your password"),
		}),
	});

	return (
		<Container>
			<Signin onSubmit={Formik.handleSubmit}>
				<h1 className="title" style={{ textAlign: "left" }}>
					Log in
				</h1>
				<Label for="email">Email</Label>
				<Input
					id="email"
					name="email"
					type={"email"}
					value={Formik.values.email}
					placeholder="Email"
					onChange={Formik.handleChange}
					style={{
						borderBottomColor:
							Formik.errors.email && Formik.touched ? "red" : "blue",
					}}
				></Input>
				{Formik.errors.email && (
					<ErrorWindow>
						{Formik.errors.email && Formik.values.email.touched}
					</ErrorWindow>
				)}
				<Label for="password">Password</Label>
				<Input
					id="password"
					name="password"
					type={"password"}
					value={Formik.values.password}
					placeholder="Password"
					style={{
						borderBottomColor:
							Formik.errors.email && Formik.touched ? "red" : "blue",
					}}
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.password && Formik.values.password.touched && (
					<ErrorWindow>
						{Formik.errors.password && Formik.values.password.touched}
					</ErrorWindow>
				)}
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
			</Signin>
		</Container>
	);
};

export default Login;
