import React from "react";
import Button from "../generics/button/button";
import Input from "../generics/input/input";
import { Container, Fragment, Icon, Title, Wrapper } from "./style";
import { Popover } from "antd";
const Filter = () => {
	const content = (
		<Wrapper>
			<Title>Address</Title>
			<Fragment>
				<Input placeholder={"Country"} />
				<Input placeholder={"Region"} />
				<Input placeholder={"City"} />
				<Input placeholder={"Zip code"} />
			</Fragment>
			<Title>Apartment Info</Title>
			<Fragment>
				<Input placeholder={"Rooms"} />
				<Input placeholder={"Size"} />
				<Input placeholder={"Sort"} />
			</Fragment>
			<Title>Price</Title>
			<Fragment>
				<Input placeholder={"Min price"} />
				<Input placeholder={"Max price"} />
			</Fragment>
		</Wrapper>
	);
	return (
		<Container>
			<Input
				pl={"40"}
				placeholder={"Enter an address, neighborhood, city, or ZIP code"}
			>
				<Icon.House></Icon.House>
			</Input>

			<Popover placement="bottomRight" content={content} trigger="click">
				<div>
					<Button type={"secondary"} width={"131px"}>
						<Icon.Advanced></Icon.Advanced>Advanced
					</Button>
				</div>
			</Popover>

			<Button width={"131px"} type={"primary"}>
				<Icon.Search></Icon.Search> Search
			</Button>
		</Container>
	);
};

export default Filter;
