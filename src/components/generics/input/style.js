/* eslint-disable default-case */
import styled from "styled-components";

const getType = (type) => {
	switch (type) {
		case "secondary":
			return { border: "1px solid #e6e9ec", color: "#0d263b" };
		case "primary":
			return { border: "none", color: "#ffffff", background: "#0061df" };
		default:
			return { border: "1px solid #e6e9ec", color: "#fffff" };
	}
};

const Container = styled.input`
	padding: 0 10px;
	font-size: 14px;
	height: ${({ height }) => height || "44px"};
	min-width: ${({ width }) => (width ? width : "100%")};
	width: ${({ width }) => (width ? width : "100%")};
	border-radius: 2px;
	padding-left: ${({ pl }) => `${pl}px`};
	${({ type }) => getType(type)}
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
const Wrapper = styled.div`
	width: 100%;
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	margin-top: ${({ mt }) => `${mt}px`};
	position: relative;
	margin-bottom: ${({ mb }) => `${mb}px`};
`;
const Icon = styled.div`
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-40%);
`;
export { Container, Wrapper, Icon };
