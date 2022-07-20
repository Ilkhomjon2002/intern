import React from "react";
import Filter from "../filter/filter";
import CarouselComponent from "./carousel/carousel";
import { Container } from "./style";

const Home = () => {
	return (
		<>
			<Container>
				<Filter></Filter>
			</Container>
			<CarouselComponent></CarouselComponent>
		</>
	);
};

export default Home;
