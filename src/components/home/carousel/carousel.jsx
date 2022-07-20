import React, { useRef } from "react";
import img1 from "../../../assets/unsplash_2gDwlIim3Uw.png";
import img2 from "../../../assets/unsplash_g39p1kDjvSY.png";
import { CarouselWrapper, Icon, Img, MainCarousel } from "./style";
const CarouselComponent = () => {
	const slider = useRef();
	console.log(slider);
	return (
		<CarouselWrapper>
			<Icon.Left onClick={() => slider.current?.prev()} />
			<Icon.Right onClick={() => slider.current?.next()} />
			<MainCarousel ref={slider} dots autoplay>
				<Img src={img1} alt="img" />
				<Img src={img2} alt="img" />
				<Img src={img1} alt="img" />
				<Img src={img2} alt="img" />
				<Img src={img1} alt="img" />
				<Img src={img2} alt="img" />
			</MainCarousel>
		</CarouselWrapper>
	);
};

export default CarouselComponent;
