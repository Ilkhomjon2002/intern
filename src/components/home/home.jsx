import React from "react";
import Filter from "../filter/filter";
import CarouselComponent from "./carousel/carousel";
import { Container } from "./style";

const Home = () => {
	return (
		<Container>
			<div>
				<Filter></Filter>
				<CarouselComponent></CarouselComponent>
			</div>
		</Container>
	);
};

export default Home;
