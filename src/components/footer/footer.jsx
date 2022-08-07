import React from "react";
import { footer } from "../../utils/footer";
import {
	Container,
	FlexContainer,
	FlexHeader,
	FlexItem,
	GridContainer,
	GridHeader,
	Wrapper,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faPhone,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<FlexContainer>
					<FlexHeader>Contact Us</FlexHeader>
					<FlexItem>
						<FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
						<span>경기도 성남시 수정구 탄리로 137번길 (태평동)</span>
					</FlexItem>
					<FlexItem>
						<FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
						<span>01022860204</span>
					</FlexItem>
					<FlexItem>
						<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
						<span>ilhommaxsudov3@gmail.com</span>
					</FlexItem>
				</FlexContainer>
				<FlexContainer>
					<FlexHeader>Discover</FlexHeader>
					{footer
						.filter((val) => val.type == "city")
						.map((val) => (
							<FlexItem>{val.title}</FlexItem>
						))}
				</FlexContainer>
				<FlexContainer>
					<FlexHeader>List by Category</FlexHeader>
					{footer
						.filter((val) => val.type == "category")
						.map((val) => (
							<FlexItem>{val.title}</FlexItem>
						))}
				</FlexContainer>
				<FlexContainer>
					<FlexHeader>Other Informations</FlexHeader>
					{footer
						.filter((val) => val.type == "company")
						.map((val) => (
							<FlexItem>{val.title}</FlexItem>
						))}
				</FlexContainer>
			</Wrapper>
		</Container>
	);
};

export default Footer;
