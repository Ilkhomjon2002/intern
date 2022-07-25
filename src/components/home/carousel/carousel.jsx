import React, { useRef } from "react";
import img1 from "../../../assets/unsplash_2gDwlIim3Uw.png";
import img2 from "../../../assets/unsplash_g39p1kDjvSY.png";
import {
	CarouselWrapper,
	Content,
	Icon,
	Img,
	Info,
	MainCarousel,
	Wrapp,
} from "./style";
const CarouselComponent = () => {
	const slider = useRef();
	console.log(slider);
	return (
		<CarouselWrapper>
			<Icon.Left onClick={() => slider.current?.prev()} />
			<Icon.Right onClick={() => slider.current?.next()} />
			<MainCarousel ref={slider} dots autoplay>
				<Wrapp>
					<Img src={img1} alt="img" />
					<Content>
						<Info>Hello</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img2} alt="img" />
					<Content>
						<Info>Hello</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img1} alt="img" />
					<Content>
						<Info>Hello</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img2} alt="img" />
					<Content>
						<Info>Hello</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img1} alt="img" />
					<Content>
						<Info>Hello</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img2} alt="img" />
					<Content>
						<Info>Hello</Info>
					</Content>
				</Wrapp>
			</MainCarousel>
		</CarouselWrapper>
	);
};

export default CarouselComponent;
