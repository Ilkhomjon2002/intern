import React from "react";
import { Card } from "./style";
import Img1 from "../../../assets/card Icons/home-image-1.jpg";

const Category_Card = ({ data, icon }) => {
	return (
		<Card className={!data?.category?.src && "default_img "}>
			<Card.Img src={Img1} />
			<Card.Context>
				<img src={icon} alt="" />
				<span>{data?.name}</span>
			</Card.Context>
		</Card>
	);
};

export default Category_Card;
