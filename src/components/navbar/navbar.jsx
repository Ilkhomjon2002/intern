import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../generics/button/button";
import {
	Container,
	Link,
	Logo,
	NavbarBody,
	NavbarWrapper,
	Wrapper,
} from "./style";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const goToSignIn = () => {
		navigate("/signin");
	};
	const goToSignUp = () => {
		navigate("/signup");
	};
	const logout = () => {
		localStorage.removeItem("token");
		if (location?.pathname?.includes("profile")) {
			navigate("/home");
		} else {
			navigate(location.pathname);
		}
	};

	return (
		<Wrapper>
			<Container>
				<NavbarWrapper>
					<Logo onClick={() => navigate("/home")}>
						<Logo.Icon />
						<Logo.Title>Houzing</Logo.Title>
					</Logo>
					<NavbarBody>
						{navbar?.map(
							({ id, path, element, title, hidden }) =>
								!hidden && (
									<Link key={id} to={path}>
										{title}
									</Link>
								)
						)}
					</NavbarBody>
					{localStorage.getItem("token") ? (
						<>
							<Button
								width={"131px"}
								onClick={() => navigate("/profile")}
								type={"primary"}
							>
								Profile
							</Button>
							<Button onClick={logout} ml={10} width={"131px"}>
								Log out
							</Button>
						</>
					) : (
						<>
							<Button onClick={goToSignIn} width={"120px"}>
								Log in
							</Button>
							<Button ml={"10"} onClick={goToSignUp} width={"120px"}>
								Sign up
							</Button>
						</>
					)}
				</NavbarWrapper>
			</Container>
			<Outlet></Outlet>
		</Wrapper>
	);
};

export default Navbar;
