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
	Download,
	Features,
	Wrap,
} from "./style";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Map from "../map/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDry } from "@fortawesome/free-solid-svg-icons";
const View = () => {
	const [data, setData] = useState();
	const param = useParams();
	useQuery(
		"get house by id",
		() =>
			fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list`).then(
				(res) => res.json()
			),
		{
			onSuccess: (res) => {
				res = res.data.find((val) => val.id == param.id);
				setData(res);
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);
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
			{data?.attachments[0]?.imgPath && (
				<Images>
					<Main src={data?.attachments[0]?.imgPath}></Main>
					<Img1 src={data?.attachments[0]?.imgPath}></Img1>
					<Img2 src={data?.attachments[0]?.imgPath}></Img2>
					<Img3 src={data?.attachments[0]?.imgPath}></Img3>
					<Img4 src={data?.attachments[0]?.imgPath}></Img4>
				</Images>
			)}

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
			<p className="description">
				Occupying over 8,000 square feet, perched over 1,100 feet in the air
				with absolutely breathtaking panoramic 360-degree views of all of New
				York City and the surrounding tri-state area, The 82nd Floor at 432 Park
				Avenue has been completely reimagined by one of the most sought-after
				design houses in London and represents an utterly unique opportunity to
				own a globally significant property. The residence is comprised of 5
				bedrooms, 2 master bathrooms, 4 on-suite guest bathrooms, 2 powder
				rooms, 2 offices, 2 dressing rooms, a media room, an oversized eat-in
				gourmet chef's kitchen, and a sprawling 1,100 square-foot Great Room
				perfectly situated in the prime southwest corner of the floor.
			</p>
			<h2 className="title" style={{ fontSize: "16px", textAlign: "left" }}>
				Documents
			</h2>
			<div
				className="description"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: "20px",
				}}
			>
				<Download>
					<Icons.Download></Icons.Download> <span>test.pdf</span>
					<span style={{ textDecoration: "underline", color: "blue" }}>
						Download
					</span>
				</Download>
				<Download>
					<Icons.Download></Icons.Download> <span>test.pdf</span>
					<span style={{ textDecoration: "underline", color: "blue" }}>
						Download
					</span>
				</Download>
				<Download>
					<Icons.Download></Icons.Download> <span>test.pdf</span>
					<span style={{ textDecoration: "underline", color: "blue" }}>
						Download
					</span>
				</Download>
			</div>
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
			{/* <h2
				className="title"
				style={{ marginTop: "10px", fontSize: "16px", textAlign: "left" }}
			>
				Features
			</h2>
			<Features>
				<Wrap>
					<FontAwesomeIcon icon={faN} />
				</Wrap>
			</Features> */}
		</Container>
	);
};

export default View;
