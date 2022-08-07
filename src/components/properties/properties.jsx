import React, { useEffect, useState } from "react";
import Filter from "../filter/filter";
import { Cards, Container, Results } from "./style";
import { useQuery } from "react-query";
import Card from "../generics/card/card";
import Button from "../generics/button/button";
import { useLocation } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch/useSearch";

const Properties = () => {
	const [title, setTitle] = useState("Properties");
	const [data, setData] = useState([]);
	const { search } = useLocation();
	const query = useSearch();

	useEffect(() => {
		if (!query.get("category_id")) {
			setTitle("Properties");
		}
	}, [query.get("category_id")]);
	useQuery(
		["search", search],
		() =>
			fetch(
				"https://houzing-app.herokuapp.com/api/v1/houses/list" + search || ""
			).then((res) => res.json()),
		{
			onSuccess: (res) => {
				setData(res?.data || []);
			},
		}
	);
	// const query = useSearch();
	const [indexes, setIndex] = useState({ start: 0, end: 6 });
	const { isLoading, isRefetching } = useQuery(
		"getHouses",
		() =>
			query.get("category_id") &&
			fetch(
				"https://houzing-app.herokuapp.com/api/v1/categories/" +
					query.get("category_id")
			).then((res) => res.json()),
		{
			onSuccess: (res) => {
				query.get("category_id") && setTitle(res?.data?.name);
			},
			onerror: (err) => {
				console.log(err);
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<Container>
			<Filter></Filter>
			<div>
				{isLoading || isRefetching ? (
					<h1 className="title"> Loading... </h1>
				) : (
					<h1 className="title"> Properties </h1>
				)}
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
