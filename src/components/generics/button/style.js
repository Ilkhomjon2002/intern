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

const Container = styled.div`
	display: flex;
	font-size: 14px;
	justify-content: center;
	align-items: center;
	height: ${({ height }) => height || "44px"};
	min-width: ${({ width }) => (width ? width : "100%")};
	width: ${({ width }) => (width ? width : "100%")};
	border-radius: 2px;
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	cursor: pointer;
	${({ type }) => getType(type)}

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

export { Container };
