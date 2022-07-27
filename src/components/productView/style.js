import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 80%;
	padding: 24px 130px;
`;

const Images = styled.div`
	display: grid;
	grid-template-columns: 540px 280px 280px 280px;
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
export { Container, Images, Main, Img1, Img2, Img3, Img4 };
