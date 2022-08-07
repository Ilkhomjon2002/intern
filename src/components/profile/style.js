import styled from "styled-components";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 130px;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Table = styled.table`
	background: #ffffff;
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
`;

export { Container, Row, Table };
