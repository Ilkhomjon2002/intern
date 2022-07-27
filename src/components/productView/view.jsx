import React, { useState } from "react";
import { Container, Images, Img1, Img2, Img3, Img4, Main } from "./style";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
const View = () => {
	const [data, setData] = useState();
	const param = useParams();
	console.log(param);
	useQuery(
		"Data2",
		() =>
			fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then(
				(res) => res.json()
			),
		{
			onSuccess: (res) => {
				res = res.data.find((val) => {
					return val.id === +param.id;
				});
				setData(res);
			},
		}
	);
	console.log(data);
	const text =
		(data?.name || "name") +
		" " +
		(data?.address || "address") +
		" " +
		(data?.city || "City") +
		" " +
		(data?.country || "Country");
	return (
		<Container>
			<Images>
				<Main src={data?.attachments[0]?.imgPath} alt=""></Main>
				<Img1 src={data?.attachments[0]?.imgPath}></Img1>
				<Img2 src={data?.attachments[0]?.imgPath}></Img2>
				<Img3 src={data?.attachments[0]?.imgPath}></Img3>
				<Img4 src={data?.attachments[0]?.imgPath}></Img4>
			</Images>
			<h1 className="title">{data?.name}</h1>
			<span className="description">{text}</span>
		</Container>
	);
};

export default View;
