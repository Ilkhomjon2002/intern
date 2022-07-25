import styled from "styled-components";
import { ReactComponent as bed } from "../../../assets/card Icons/bed-image.svg";
import { ReactComponent as bath } from "../../../assets/card Icons/bath-image.svg";
import { ReactComponent as car } from "../../../assets/card Icons/car-image.svg";
import { ReactComponent as ruler } from "../../../assets/card Icons/ruler-image.svg";
import { ReactComponent as heart } from "../../../assets/card Icons/heart-image.svg";
import { ReactComponent as cursor } from "../../../assets/card Icons/cursor.svg";

const Card_item = styled.div`
	margin: 20px;
	margin-bottom: 20px;
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-height: 250px;
	width: 400px;
	background-color: #ffffff;
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	:hover {
		filter: drop-shadow(0, 20px, 38px, rgba(0, 0, 0, 0.6))
			drop-shadow(0, 7px, 46px, rgba(0, 0, 0, 0.6))
			drop-shadow(0, 8px, 15px, rgba(0, 0, 0, 0.6));
	}
`;
const Img = styled.img`
	min-height: 220px;
	max-height: 220px;
	width: 100%;
`;
const Featured = styled.button`
	padding: 5px 12px;
	color: #ffffff;
	background: #0061df;
	border-radius: 3px;
	border: none;
	position: absolute;
	font-weight: 600;
	text-transform: uppercase;
	top: 20px;
	left: 20px;
	font-size: 10px;
`;
const ForSale = styled.button`
	padding: 5px 12px;
	color: #ffffff;
	font-size: 10px;
	font-weight: 600;
	text-transform: uppercase;
	background: #0d263b;
	border-radius: 3px;
	border: none;
	position: absolute;
	top: 20px;
	right: 20px;
`;
const User = styled.div`
	width: 40px;
	height: 40px;
	overflow: hidden;
	border: 3px solid #ffffff;
	position: absolute;
	border-radius: 50%;
	right: 20px;
	top: 200px;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	& > img {
		width: 100%;
	}
`;
const Sale = styled.div`
	color: var(--secondaryColor);
	text-decoration: line-through;
	font-size: 12px;
	font-family: "Montserrat";
`;
const PriceWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	align-items: center;
`;
const InfoWrapper = styled.div`
	padding: 20px;
`;
User.Img = styled.img``;
const Info = styled.div``;
Info.Title = styled.div`
	color: var(--primaryColor);
	font-size: 20px;
	font-family: Montserrat;
	font-weight: 600;
`;
const Subtitle = styled("p")`
	color: var(--secondaryColor);
	font-family: Montserrat;
	font-size: 15px;
	margin: 4px 0 18px;
`;
Info.Details = styled.div``;
const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
Icons.Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)`
	padding: 5px;
`;
Icons.Heart = styled(heart)`
	margin-left: 10px;
	cursor: pointer;

	:active {
		transform: scale(0.97);
	}
`;
Icons.Cursor = styled(cursor)``;
const Line = styled("hr")`
	opacity: 0.3;
`;
const Price = styled(Info.Title)`
	font-size: 16px;
	font-weight: 600;
`;
export {
	Card_item,
	Img,
	Price,
	Sale,
	PriceWrap,
	Line,
	Info,
	InfoWrapper,
	User,
	Icons,
	Subtitle,
	Featured,
	ForSale,
};
