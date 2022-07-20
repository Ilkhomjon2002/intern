import styled from "styled-components";
import { ReactComponent as advanced } from "../../assets/setting-lines.svg";
import { ReactComponent as house } from "../../assets/Vectorhouse.svg";
import { ReactComponent as search } from "../../assets/001-loupe.svg";
const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 10px 0;
	gap: 20px;
`;
const Icon = styled.div``;
Icon.Advanced = styled(advanced)`
	margin-right: 8px;
`;
Icon.House = styled(house)``;
Icon.Search = styled(search)`
	margin-right: 8px;
`;
const Wrapper = styled.div`
	display: flex;
	padding: 30px;
	flex-direction: column;
`;
const Fragment = styled.div`
	display: flex;
	margin-bottom: 20px;
	gap: 20px;
`;
const Title = styled.div`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #0d263b;
	margin-bottom: 10px;
`;
export { Container, Icon, Wrapper, Fragment, Title };
