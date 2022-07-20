import React, { useRef } from "react";
import { MainCarousel } from "./style";
import { Carousel } from "antd";
const CarouselComponent = () => {
	const slider = useRef();
	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};
	const contentStyle = {
		height: "160px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "#364d79",
	};
	return (
		<div>
			<Carousel afterChange={onChange}>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
		</div>
	);
};

export default CarouselComponent;
