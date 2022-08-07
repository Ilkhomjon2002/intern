import React, { useState } from "react";
import { Container, ErrorWindow, Input, Signin, Submit } from "./style";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
const Signup = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const Formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			fName: "",
			lName: "",
		},
		onSubmit: (value) => {
			fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
				method: "POST",
				headers: { "Content-type": "Application/json" },
				body: JSON.stringify({
					email: value.email,
					password: value.password,
					firstname: value.fName,
					lastname: value.lName,
					roleIdSet: [1],
				}),
			})
				.then(
					(res) => res.json(),
					(err) => {
						console.log(err, "err");
						setError(err.message);
					}
				)
				.then(
					(res) => {
						console.log(res, "res");
						if (res.success) {
							alert(
								"We sent verification to your email please verify it and login with that email"
							);
							setTimeout(() => {
								navigate("/login");
								setError(false);
							}, 5000);
						} else {
							setError(res.message || res.error);
						}
					},
					(err) => console.log(err)
				);
		},
		validationSchema: yup.object({
			email: yup
				.string()
				.email("Should be valid email")
				.required("Email is required"),
			fName: yup.string().required("First name is required"),
			lName: yup.string().required("Last name is required"),
			password: yup.string().required("Password is required"),
		}),
	});
	return (
		<Container>
			<Signin onSubmit={Formik.handleSubmit}>
				<h1 className="title" style={{ textAlign: "left" }}>
					Registration
				</h1>
				<Input
					id="fName"
					name="fName"
					type={"text"}
					value={Formik.values.fName}
					placeholder="First Name"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.fName && Formik.touched.fName && (
					<ErrorWindow> {Formik.errors.fName} </ErrorWindow>
				)}
				<Input
					id="lName"
					name="lName"
					type={"text"}
					value={Formik.values.lName}
					placeholder="Last Name"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.lName && Formik.touched.lName && (
					<ErrorWindow>{Formik.errors.lName}</ErrorWindow>
				)}
				<Input
					id="email"
					name="email"
					type={"email"}
					value={Formik.values.email}
					placeholder="Email"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.email && Formik.touched.email && (
					<ErrorWindow>{Formik.errors.email} </ErrorWindow>
				)}
				<Input
					id="password"
					name="password"
					type={"password"}
					value={Formik.values.password}
					placeholder="Password"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.password && Formik.touched.password && (
					<ErrorWindow> {Formik.errors.password}</ErrorWindow>
				)}
				{error && <ErrorWindow> {error}</ErrorWindow>}

				<Submit type={"submit"}>Register</Submit>
			</Signin>
		</Container>
	);
};

export default Signup;
