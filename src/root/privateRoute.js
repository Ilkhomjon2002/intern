import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const [user, setUser] = useState(null);
	// useEffect(() => {
	// 	fetch("https://houzing-app.herokuapp.com/me", {
	// 		headers: {
	// 			Authorization: `Bearer ${localStorage.getItem("token")}`,
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log(res);
	// 			setUser(res);
	// 		})
	// 		.then((res) => {
	// 			console.log(user, "user");
	// 			return user && <Outlet></Outlet>;
	// 		});
	// }, []);

	return <Outlet></Outlet>;
};

export default PrivateRoute;
