import React from "react";
import Category_Card from "./category_card/category_card";
import { Container } from "./style";
import AliceCarousel from "react-alice-carousel";
const Category = () => {
	const items = [
		<Category_Card />,
		<Category_Card />,
		<Category_Card />,
		<Category_Card />,
		<Category_Card />,
		<Category_Card />,
	];
	return (
		<Container>
			<div>
				<h1 className="title"> Category</h1>
				<p className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>
			</div>

			<AliceCarousel
				mouseTracking
				arrows={false}
				responsive={{ 0: { items: 1 }, 728: { items: 3 }, 1424: { items: 4 } }}
				items={items}
			></AliceCarousel>
		</Container>
	);
};

export default Category;
