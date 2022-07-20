import Generic from "../page/GenericPage";

import Home from "../page/Home/home";
export const navbar = [
	{
		id: 1,
		title: "Home",
		path: "/home",
		element: <Home></Home>,
	},
	{
		id: 2,
		title: "Properties",
		path: "/properties",
		element: <Home></Home>,
	},
	{
		id: 3,
		title: "Contact",
		path: "/contact",
		element: <Generic></Generic>,
	},
];
