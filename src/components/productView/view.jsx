import React, { useState } from "react";
import {
	Container,
	Images,
	Img1,
	Img2,
	Img3,
	Img4,
	Main,
	Subtitle,
	Icons,
	LocInfo,
} from "./style";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Map from "../map/map";
const View = () => {
	const [data, setData] = useState();
	const param = useParams();
	useQuery(
		"get house by id",
		() =>
			fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${param.id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}).then((res) => res.json()),
		{
			onSuccess: (res) => {
				setData(res.data);
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
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

			<h1 className="title" style={{ textAlign: "left", marginBottom: "0px" }}>
				{data?.name}
			</h1>
			<span className="description">{text}</span>
			<Icons>
				{data?.houseDetails?.bed && (
					<Icons.Wrapper>
						<Icons.Bed />
						<Subtitle>{data?.houseDetails?.bed} Beds</Subtitle>
					</Icons.Wrapper>
				)}
				{data?.houseDetails?.bath && (
					<Icons.Wrapper>
						<Icons.Bath />
						<Subtitle>{data?.houseDetails?.bath} Baths</Subtitle>
					</Icons.Wrapper>
				)}
				{data?.houseDetails?.garage && (
					<Icons.Wrapper>
						<Icons.Car />

						<Subtitle>{data?.houseDetails?.garage} garage</Subtitle>
					</Icons.Wrapper>
				)}
				{data?.houseDetails?.area && (
					<Icons.Wrapper>
						<Icons.Ruler />

						<Subtitle>{data?.houseDetails?.area} Sq Ft</Subtitle>
					</Icons.Wrapper>
				)}
				{data?.houseDetails?.yearBuilt && (
					<Icons.Wrapper>
						<Icons.Date />

						<Subtitle>{data?.houseDetails?.yearBuilt}</Subtitle>
					</Icons.Wrapper>
				)}
			</Icons>
			<h2 className="title" style={{ fontSize: "16px", textAlign: "left" }}>
				Description
			</h2>
			<p className="description">{data?.description}</p>
			<h2 className="title" style={{ fontSize: "16px", textAlign: "left" }}>
				Documents
			</h2>
			<h2 className="title" style={{ fontSize: "16px", textAlign: "left" }}>
				Location
			</h2>
			<LocInfo>
				<LocInfo.P className="title">
					<span>Address:</span>
					<LocInfo.Span className="description">
						{data?.address || "address"}
					</LocInfo.Span>
				</LocInfo.P>
				<LocInfo.P className="title">
					<span>City:</span>
					<LocInfo.Span className="description">
						{data?.city || "city"}
					</LocInfo.Span>
				</LocInfo.P>
				<LocInfo.P className="title">
					<span>Country:</span>
					<LocInfo.Span className="description">
						{data?.country || "country"}{" "}
					</LocInfo.Span>
				</LocInfo.P>
				<LocInfo.P className="title">
					<span>Zip Code:</span>
					<LocInfo.Span className="description">
						{data?.zipCode || "country"}{" "}
					</LocInfo.Span>
				</LocInfo.P>
			</LocInfo>
			<Map lat={data?.location?.latitude} lng={data?.location?.longitude}></Map>
		</Container>
	);
};

export default View;
