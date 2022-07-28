import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Navbar from "../components/navbar/navbar";
import View from "../components/productView/view";
import Login from "../components/login/login";
import ErrorPage from "../page/ErrorPage/Error";
import { navbar } from "../utils/navbar";

const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				<Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
				{navbar.map(({ id, element, path }) => (
					<Route path={path} element={element} key={id} />
				))}
				<Route path="/view:id" element={<View></View>}></Route>
				<Route path="/signin" element={<Login></Login>}></Route>
			</Route>

			<Route path="*" element={<ErrorPage></ErrorPage>} />
		</Routes>
	);
};

export default Root;
