import View from "../components/productView/view";
import Generic from "../page/GenericPage";

import Home from "../page/Home/home";
import Properties from "../page/Properties/properties";
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
		element: <Properties></Properties>,
	},
	{
		id: 3,
		title: "Contact",
		path: "/contact",
		element: <Generic></Generic>,
	},
];
