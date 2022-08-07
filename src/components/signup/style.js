import styled from "styled-components";
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	margin: 0 auto;
	height: 90vh;
	padding: 0 130px;
`;
const Signin = styled.form`
	padding: 24px 30px 48px 30px;
	background: #ffffff;

	display: flex;
	justify-content: center;
	flex-direction: column;
	/* Border / Color */
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
`;
const Input = styled.input`
	border: none;
	outline: none;
	border-bottom: 2px #e6e9ec solid;
	padding: 30px 0 0 4px;

	width: 520px;
	/* Color/2 */
	font-size: 16px;
	color: #0d263b;
	&:focus {
		border-bottom: 2px #0061df solid;
	}
`;

const Submit = styled.button`
	display: flex;
	font-size: 14px;
	justify-content: center;
	align-items: center;
	border-radius: 2px;
	cursor: pointer;
	color: #ffffff;
	border: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	padding: 12px;

	margin-top: 20px;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background: #0061df;
	:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;
const ErrorWindow = styled.div`
	margin: 10px 0 0 0;
	padding: 12px;
	border-radius: 2px;
	color: red;
	background-color: rgba(255, 0, 0, 0.1);
`;
const CheckBox = styled.input``;
export { Container, Signin, Input, CheckBox, Submit, ErrorWindow };
