import Login from "../components/login/login";
import View from "../components/productView/view";
import Profile from "../components/profile/profile";
import Signup from "../components/signup/signup";
import Generic from "../page/GenericPage";
import Home from "../page/Home/home";
import Properties from "../page/Properties/properties";
export const navbar = [
	{
		id: 1,
		title: "Home",
		path: "/home",
		element: <Home></Home>,
		hidden: false,
		private: false,
		search: "?",
	},
	{
		id: 2,
		title: "Properties",
		path: "/properties",
		element: <Properties></Properties>,
		hidden: false,
		private: false,
		search: "?",
	},
	{
		id: "2-1",
		title: "Properties",
		path: "/properties/:id",
		element: <View></View>,
		search: "?",
		private: false,
		hidden: true,
		param: true,
	},
	{
		id: 3,
		title: "Contact",
		path: "/contact",
		element: <Generic></Generic>,
		search: "?",
		private: false,
		hidden: false,
	},
	{
		id: 4,
		title: "MyProfile",
		path: "/profile",
		search: "?",
		private: true,
		hidden: true,
		element: <Generic></Generic>,
		param: true,
	},
	{
		id: 5,
		title: "Signin",
		path: "/signin",
		element: <Login></Login>,
		hidden: true,
		param: true,
		private: false,
		search: "?",
	},
	{
		id: 6,
		title: "Signup",
		path: "/signup",
		element: <Signup></Signup>,
		hidden: true,
		param: true,
		private: false,
		search: "?",
	},
];
