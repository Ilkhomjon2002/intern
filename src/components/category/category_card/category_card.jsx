import React from "react";
import { Card } from "./style";
import Img1 from "../../../assets/card Icons/home-image-1.jpg";
const Category_Card = ({ category }) => {
	return (
		<Card className={!category?.src && "default_img "}>
			<Card.Img src={Img1} />
			<Card.Context>House</Card.Context>
		</Card>
	);
};

export default Category_Card;
