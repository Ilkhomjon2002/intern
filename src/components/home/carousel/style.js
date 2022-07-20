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
export { MainCarousel, Img, Icon, CarouselWrapper };
