import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/card Icons/bed-image.svg";
import { ReactComponent as bath } from "../../assets/card Icons/bath-image.svg";
import { ReactComponent as car } from "../../assets/card Icons/car-image.svg";
import { ReactComponent as ruler } from "../../assets/card Icons/rulerruler.svg";
import { ReactComponent as heart } from "../../assets/card Icons/heart-image.svg";
import { ReactComponent as cursor } from "../../assets/card Icons/cursor.svg";
import { ReactComponent as date } from "../../assets/card Icons/Vector(1).svg";
import { ReactComponent as download } from "../../assets/card Icons/surface1.svg";
const Container = styled.div`
	width: 80%;
	padding: 24px 130px;
	margin: 0 auto;
`;

const Images = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		"main main img1 img2"
		"main main img3 img4";
	gap: 20px;
	width: 100%;
`;
const Main = styled.img`
	grid-area: main;
	height: 100%;
	object-fit: cover;
	width: 100%;
	& img {
		overflow: hidden;
		width: 100%;
	}
`;

const Img1 = styled.img`
	background-color: red;
	height: 100%;
	width: 100%;
	object-fit: cover;
	grid-area: img1;
`;
const Img2 = styled.img`
	background-color: red;
	height: 100%;
	object-fit: cover;
	width: 100%;

	grid-area: img2;
`;
const Img3 = styled.img`
	background-color: red;
	height: 100%;
	width: 100%;
	object-fit: cover;
	grid-area: img3;
`;
const Img4 = styled.img`
	background-color: red;
	height: 100%;
	width: 100%;
	object-fit: cover;
	grid-area: img4;
	position: relative;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin: 34px 0 51px;
`;
Icons.Wrapper = styled.div`
	display: flex;
	align-items: center;
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Heart = styled(heart)`
	margin-left: 10px;
	cursor: pointer;

	:active {
		transform: scale(0.97);
	}
`;
Icons.Cursor = styled(cursor)``;
Icons.Date = styled(date)``;
Icons.Download = styled(download)``;
const Subtitle = styled("p")`
	color: var(--secondaryColor);
	font-family: Montserrat;
	font-size: 15px;
	margin: 0;
`;
const Download = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const LocInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
LocInfo.P = styled.p`
	font-size: 14px;
`;
LocInfo.Span = styled.span`
	font-size: 14px;
	margin-left: 5px;
`;
const Features = styled.div`
	display: grid;
	grid-template-columns: repeat(1fr, 4);
	grid-template-rows: repeat(1fr, 4);
	gap: 20px;
`;
const Wrap = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
export {
	Container,
	Images,
	Main,
	Img1,
	Wrap,
	Features,
	Img2,
	Img3,
	Img4,
	Icons,
	Subtitle,
	LocInfo,
	Download,
};
