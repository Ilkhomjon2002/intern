import React from "react";
import { Icon } from "../input/style";
import {
	Card_item,
	Featured,
	ForSale,
	Icons,
	Img,
	Info,
	InfoWrapper,
	Line,
	Price,
	PriceWrap,
	Sale,
	Subtitle,
	User,
} from "./style";
import avatar from "../../../assets/card Icons/24-248253_user-profile-default-image-png-clipart-png-download.png";

import { useNavigate } from "react-router-dom";
const Card = ({ info, mr, ml, margin, onClick }) => {
	const navigate = useNavigate();
	const text =
		(info?.name || "name") +
		" " +
		(info?.address || "address") +
		" " +
		(info?.city || "City") +
		" " +
		(info?.country || "Country");
	return (
		<Card_item onClick={onClick} className="nocopy">
			<Img
				src={info?.attachments[0]?.imgPath || "no"}
				className={!info?.attachments[0]?.imgPath && "default_img"}
				alt="House img"
			/>
			<Featured>Featured</Featured>
			<ForSale>For Sale</ForSale>
			<User>
				<img src={info?.user?.src || avatar} alt="" />
			</User>
			<InfoWrapper>
				<Info.Title>
					{info?.description || "New Apartment Nice View"}
				</Info.Title>
				<Subtitle>
					{text.length > 40 ? text.slice(0, 40) + "..." : text}
				</Subtitle>
				<Icons>
					<Icons.Wrapper>
						<Icons.Bed />
						<Subtitle>4 Beds</Subtitle>
					</Icons.Wrapper>

					<Icons.Wrapper>
						<Icons.Bath />
						<Subtitle>5 Baths</Subtitle>
					</Icons.Wrapper>
					<Icons.Wrapper>
						<Icons.Car />

						<Subtitle>1 garage</Subtitle>
					</Icons.Wrapper>
					<Icons.Wrapper>
						<Icons.Ruler />

						<Subtitle>1200 Sq Ft</Subtitle>
					</Icons.Wrapper>
				</Icons>
			</InfoWrapper>
			<Line />
			<PriceWrap>
				<div>
					<Sale>$2,800/mo</Sale>
					<Price>$7,500/mo</Price>
				</div>

				<div>
					<Icons.Cursor
						onClick={() => navigate(`../view${info.id}`)}
					></Icons.Cursor>
					<Icons.Heart></Icons.Heart>
				</div>
			</PriceWrap>
		</Card_item>
	);
};

export default Card;
