import React, { useRef, useState } from "react";
import Category_Card from "./category_card/category_card";
import { Container, Icon, Wrap } from "./style";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import Icon1 from "../../assets/category Icons/apartment.svg";
import Icon2 from "../../assets/category Icons/business-and-trade.svg";
import Icon3 from "../../assets/category Icons/home 1.svg";
import Icon4 from "../../assets/category Icons/villa.svg";
const Category = () => {
	const [category, setCategory] = useState([]);
	useQuery(
		"category",
		() =>
			fetch("https://houzing-app.herokuapp.com/api/v1/categories/list").then(
				(res) => res.json()
			),
		{
			onSuccess: (res) => {
				setCategory([...res.data]);
			},
		}
	);
	const Icons = [Icon1, Icon2, Icon3, Icon4];
	let index = 0;
	const slider = useRef();
	const items = category.map((val) => {
		index = index < 3 ? ++index : 0;
		return <Category_Card data={val} icon={Icons[index]}></Category_Card>;
	});
	return (
		<Container>
			<div>
				<h1 className="title"> Category</h1>
				<p className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>
			</div>
			<Wrap>
				<Icon.Right onClick={() => slider.current.slideNext()}></Icon.Right>
				<Icon.Left onClick={() => slider.current.slidePrev()}></Icon.Left>
				<AliceCarousel
					mouseTracking
					disableButtonsControls={true}
					responsive={{
						0: { items: 1 },
						728: { items: 3 },
						1424: { items: 4 },
					}}
					ref={slider}
					items={items}
					style={{ gap: "20px" }}
				></AliceCarousel>
			</Wrap>
		</Container>
	);
};

export default Category;
