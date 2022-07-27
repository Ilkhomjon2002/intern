import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 0 130px;
	margin: 0 auto;
`;
const Results = styled.div`
	color: #696969;
	font-size: 14px;
	display: flex;
	align-items: center;
	padding-left: 75px;
	width: 100%;
	float: left;
	h1 {
		color: #0d263b;
		font-size: 16px;
		margin: 0 5px 0 0;
	}
`;
const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;

	justify-content: center;
	width: 100%;
`;
export { Container, Results, Cards };
