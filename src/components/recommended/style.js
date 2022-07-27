import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 100px 130px 0;
	width: 100%;
`;
const Icon = styled.div``;
Icon.Left = styled(ArrowLeftOutlined)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: -10%;
	transform: translate(100%, -50%);
	width: 45px;
	height: 45px;
	color: white;
	padding: 12px;
	background: white;
	opacity: 0.5;
	border-radius: 50%;
	z-index: 999;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.3);
	cursor: pointer;
	:hover {
		opacity: 0.97;
	}
	& path {
		fill: #0d263b;
	}
`;
Icon.Right = styled(ArrowRightOutlined)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	right: -10%;
	transform: translate(-100%, -50%);
	width: 45px;
	height: 45px;
	color: white;
	padding: 12px;
	background: white;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.3);
	opacity: 0.5;
	border-radius: 50%;
	z-index: 999;
	cursor: pointer;
	:hover {
		opacity: 0.97;
	}
	& path {
		fill: #0d263b;
	}
`;
const Wrap = styled.div`
	position: relative;
	width: 90%;
	margin: 0 auto;
`;
export { Container, Wrap, Icon };
