import React, { useState } from "react";
import { useQuery } from "react-query";
import Card from "../generics/card/card";
import AliceCarousel from "react-alice-carousel";
import { Container } from "./style";
const Recommended = () => {
	const [data, setData] = useState([]);
	useQuery(
		"",
		() =>
			fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then(
				(res) => res.json()
			),
		{
			onSuccess: (res) => {
				setData([...res.data]);
			},
			onerror: (err) => {
				console.log(err);
			},
		}
	);
	const Items = data.map((val) => <Card info={val}></Card>);
	return (
		<Container>
			<h1 className="title">Recommended</h1>
			<p className="description">
				Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
			</p>
			<AliceCarousel
				arrows={false}
				responsive={{
					0: {
						items: 1,
					},
					780: { items: 2 },
					1424: {
						items: 3,
					},
				}}
				mouseTracking
				items={Items}
			/>
		</Container>
	);
};

export default Recommended;
