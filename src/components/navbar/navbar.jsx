import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
	return (
		<Wrapper>
			<Container>
				<NavbarWrapper>
					<Logo onClick={() => navigate("/home")}>
						<Logo.Icon />
						<Logo.Title>Houzing</Logo.Title>
					</Logo>
					<NavbarBody>
						{navbar?.map(({ id, path, element, title }) => (
							<Link key={id} to={path}>
								{title}
							</Link>
						))}
					</NavbarBody>{" "}
					<Button width={"120px"}>Login </Button>
				</NavbarWrapper>
			</Container>
			<Outlet></Outlet>
		</Wrapper>
	);
};

export default Navbar;
