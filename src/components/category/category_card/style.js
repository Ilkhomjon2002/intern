import styled from "styled-components";

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 280px;
	height: 350px;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
		url(.jpg);

	/* XXL */
	box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
		0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
	border-radius: 3px;
`;
Card.Img = styled.img`
	width: 100%;
`;
Card.Context = styled.div`
	color: #ffffff;
	position: absolute;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
`;

export { Card };
