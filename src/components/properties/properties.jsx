import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import { Cards, Container, Results } from "./style";
import { useQuery } from "react-query";
import Card from "../generics/card/card";
import Button from "../generics/button/button";

const Properties = () => {
	const [data, setData] = useState([]);
	const [indexes, setIndex] = useState({ start: 0, end: 6 });
	const { isLoading, refetch } = useQuery(
		"test",
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
	console.log(isLoading);
	if (isLoading)
		return (
			<h1
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "80px",
				}}
			>
				Loading ...
			</h1>
		);
	return (
		<Container>
			<Filter></Filter>
			<div>
				<h1 className="title">Properties</h1>
				<p className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</p>
			</div>
			<Results>
				<h1>{data.length}</h1> results
			</Results>
			<Cards>
				{data.slice(indexes.start, indexes.end).map((val) => (
					<Card key={val.id} info={val} />
				))}
			</Cards>
			{indexes.end <= data.length && (
				<Button
					width={"250px"}
					onClick={() => {
						setIndex(indexes.end + 6);
						refetch();
					}}
					type={"primary"}
				>
					SHOW MORE
				</Button>
			)}
		</Container>
	);
};

export default Properties;
