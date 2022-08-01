import React, { useState } from "react";
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
	const [like, setLike] = useState(false);
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
						<Subtitle>{info?.houseDetails?.bed} Beds</Subtitle>
					</Icons.Wrapper>

					<Icons.Wrapper>
						<Icons.Bath />
						<Subtitle>{info?.houseDetails?.bath} Baths</Subtitle>
					</Icons.Wrapper>
					<Icons.Wrapper>
						<Icons.Car />

						<Subtitle>{info?.houseDetails?.garage} garage</Subtitle>
					</Icons.Wrapper>
					<Icons.Wrapper>
						<Icons.Ruler />

						<Subtitle>{info?.houseDetails?.area} Ft</Subtitle>
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
					<Icons.Heart
						color={() => like && "red"}
						onClick={() => {
							setLike(!like);
						}}
					></Icons.Heart>
				</div>
			</PriceWrap>
		</Card_item>
	);
};

export default Card;
