import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../../generics/card/style";
import { Container, Price, Subtitle, Title } from "./style";

const CarouselText = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Container style={{ gap: "10px" }}>
			<Title>{data.title}</Title>
			<Subtitle>{data.address}</Subtitle>
			<Icons style={{ gap: "20px" }}>
				<Icons.Wrapper>
					<Icons.Bed />
					<Subtitle>{data?.beds} Beds</Subtitle>
				</Icons.Wrapper>

				<Icons.Wrapper>
					<Icons.Bath />
					<Subtitle>{data?.baths} Baths</Subtitle>
				</Icons.Wrapper>
				<Icons.Wrapper>
					<Icons.Car />

					<Subtitle>{data?.garage} garage</Subtitle>
				</Icons.Wrapper>
				<Icons.Wrapper>
					<Icons.Ruler />

					<Subtitle>{data?.sq} Ft</Subtitle>
				</Icons.Wrapper>
			</Icons>
			<Price>${data.price}/mo</Price>
			<Button onClick={() => navigate("/properties")} width={"131px"}>
				Read More
			</Button>
		</Container>
	);
};

export default CarouselText;
