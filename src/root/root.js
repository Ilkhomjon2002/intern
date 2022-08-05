import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import ErrorPage from "../page/ErrorPage/Error";
import { navbar } from "../utils/navbar";

const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				<Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
				{navbar.map(({ id, element, path, param }) => {
					return param && <Route path={path} element={element} key={id} />;
				})}
			</Route>
			<Route element={<Navbar />}>
				<Route path="/" element={<Navigate to={"/home"}></Navigate>}></Route>
				{navbar.map(({ id, element, path, param, hidden }) => {
					return !hidden && <Route path={path} element={element} key={id} />;
				})}
			</Route>

			<Route path="*" element={<ErrorPage></ErrorPage>} />
		</Routes>
	);
};

export default Root;
