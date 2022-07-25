import { Carousel } from "antd";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
const CarouselWrapper = styled("div")`
	position: relative;
	width: 100%;
`;
const MainCarousel = styled(Carousel)`
	height: fit-content;
`;
const Img = styled("img")`
	background: black;
	width: 100%;
`;
const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	z-index: 999;
	color: white;
	font-family: "Montserrat";
	font-style: normal;
	letter-spacing: -0.02em;
	line-height: 48px;
	font-weight: 700;
	font-size: 44px;
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: "";
		background-color: rgba(0, 0, 0, 0.65);
		z-index: -1;
	}
`;
const Wrapp = styled.div`
	position: relative;
`;
const Icon = styled.div``;
Icon.Left = styled(ArrowLeftOutlined)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 0px;
	transform: translate(100%, -50%);
	width: 45px;
	height: 45px;
	color: white;
	padding: 12px;
	background: white;
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
Icon.Right = styled(ArrowRightOutlined)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translate(-100%, -50%);
	width: 45px;
	height: 45px;
	color: white;
	padding: 12px;
	background: white;
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
const Info = styled.div`
	color: white;
`;
export { MainCarousel, Img, Icon, CarouselWrapper, Content, Wrapp, Info };
