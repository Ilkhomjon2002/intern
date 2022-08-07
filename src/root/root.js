import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import ErrorPage from "../page/ErrorPage/Error";
import { navbar } from "../utils/navbar";
import PrivateRoute from "./privateRoute";

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
				{navbar.map(({ id, element, path, param, hidden, privat }) => {
					return (
						!hidden &&
						!privat && <Route path={path} element={element} key={id} />
					);
				})}
			</Route>
			<Route element={<PrivateRoute />}>
				<Route element={<Navbar />}>
					{navbar.map(({ id, element, path, param, privat }) => {
						return privat && <Route path={path} element={element} key={id} />;
					})}
				</Route>
			</Route>
			<Route path="*" element={<ErrorPage></ErrorPage>} />
		</Routes>
	);
};

export default Root;
