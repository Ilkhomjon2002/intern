import React from "react";
import Category from "../category/category";
import Filter from "../filter/filter";
import Card from "../generics/card/card";
import Recommended from "../recommended/recommended";
import CarouselComponent from "./carousel/carousel";
import { Container } from "./style";

const Home = () => {
	return (
		<>
			<Container>
				<Filter />
			</Container>
			<CarouselComponent />
			<Recommended />
			<Category />
		</>
	);
};

export default Home;
