import React from "react";
import Button from "../generics/button/button";
import Input from "../generics/input/input";
import { Container, Fragment, Icon, Title, Wrapper } from "./style";
import { Popover } from "antd";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import UseReplace from "../../hooks/useReplace/useReplace";
import { useSearch } from "../../hooks/useSearch/useSearch";
const Filter = () => {
	const navigate = useNavigate();
	const onChange = ({ target: { name, value } }) => {
		navigate(UseReplace(name, value));
	};

	const content = (
		<Wrapper>
			<Title>Address</Title>
			<Fragment>
				<Input onChange={onChange} name={"country"} placeholder={"Country"} />
				<Input onChange={onChange} name={"region"} placeholder={"Region"} />
				<Input onChange={onChange} name={"city"} placeholder={"City"} />
				<Input onChange={onChange} name={"zip_code"} placeholder={"Zip code"} />
			</Fragment>
			<Title>Apartment Info</Title>
			<Fragment>
				<Input onChange={onChange} name={"room"} placeholder={"Rooms"} />
				<Input onChange={onChange} name={"size"} placeholder={"Size"} />
				<Input onChange={onChange} name={"sort"} placeholder={"Sort"} />
			</Fragment>
			<Title>Price</Title>
			<Fragment>
				<Input
					onChange={onChange}
					name={"min_price"}
					placeholder={"Min price"}
				/>
				<Input
					onChange={onChange}
					name={"max_price"}
					placeholder={"Max price"}
				/>
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
