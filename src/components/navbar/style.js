import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/Vectorlogo.svg";
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 0 130px;
	justify-content: center;
	background-color: var(--primaryColor);

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
const NavbarWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 64px;
	max-width: 1440px;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	width: 100%;
	color: #ffffff;
`;

const NavbarBody = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	color: white;
	.active {
		color: #00fff5;
	}
`;
const Link = styled(NavLink)`
	color: white;
	text-decoration: none;
	margin: 0 32px;
	font-style: normal;
	font-size: 18px;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
Logo.Icon = styled(logoIcon)``;
Logo.Title = styled("div")`
	margin-left: 11px;
	font-size: 20px;
	font-weight: 500px;
`;

export { Container, Wrapper, Logo, NavbarWrapper, NavbarBody, Link };
