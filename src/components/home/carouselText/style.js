import styled from "styled-components";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 44px;
	font-weight: 700;
	color: #ffffff;
`;

const Subtitle = styled.p`
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 16px;
	color: #ffffff;
	opacity: 0.8;
`;
const Price = styled.h3`
	font-family: "Montserrat";
	font-weight: 600;

	font-size: 28px;
	color: #ffffff;
`;

export { Container, Title, Subtitle, Price };
