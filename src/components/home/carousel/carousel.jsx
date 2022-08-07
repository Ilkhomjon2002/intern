import React, { useRef } from "react";
import img1 from "../../../assets/unsplash_2gDwlIim3Uw.png";
import img2 from "../../../assets/unsplash_g39p1kDjvSY.png";
import CarouselText from "../carouselText/carouselText";
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
	const staticData = {
		title: "Skyper Pool Apartment",
		address: "112 Glenwood Ave Hyde Park, Boston, MA",
		price: 5250,
		beds: 4,
		baths: 5,
		garage: 1,
		sq: 1200,
	};
	return (
		<CarouselWrapper>
			<Icon.Left onClick={() => slider.current?.prev()} />
			<Icon.Right onClick={() => slider.current?.next()} />
			<MainCarousel ref={slider} dots autoplay>
				<Wrapp>
					<Img src={img1} alt="img" />
					<Content>
						<Info>
							<CarouselText data={staticData}></CarouselText>
						</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img2} alt="img" />
					<Content>
						<Info>
							<CarouselText data={staticData}></CarouselText>
						</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img1} alt="img" />
					<Content>
						<Info>
							<CarouselText data={staticData}></CarouselText>
						</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img2} alt="img" />
					<Content>
						<Info>
							<CarouselText data={staticData}></CarouselText>
						</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img1} alt="img" />
					<Content>
						<Info>
							<CarouselText data={staticData}></CarouselText>
						</Info>
					</Content>
				</Wrapp>
				<Wrapp>
					<Img src={img2} alt="img" />
					<Content>
						<Info>
							<CarouselText data={staticData}></CarouselText>
						</Info>
					</Content>
				</Wrapp>
			</MainCarousel>
		</CarouselWrapper>
	);
};

export default CarouselComponent;
