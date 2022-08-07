import styled from "styled-components";
const Container = styled.div`
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: var(--primaryColor);
	margin-top: 100px;
`;
const Wrapper = styled.div`
	display: flex;
	padding: 48px 130px 0 130px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;
const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
`;
const FlexHeader = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	color: #ffffff;

	margin-bottom: 32px;
`;
const FlexItem = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	opacity: 0.8;
	display: flex;
	color: #ffffff;
	justify-content: space-between;
	margin-bottom: 20px;
	gap: 15px;
	align-items: center;
`;
export { Container, Wrapper, FlexContainer, FlexHeader, FlexItem };
