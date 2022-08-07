import { Table } from "antd";
import React from "react";
import { Input } from "../login/style";
import { Container, Row, Table as TableBox } from "./style";

const Profile = () => {
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
	];

	const columns = [
		{
			title: "Listing Title",
			dataIndex: " title",
			key: " title",
		},
		{
			title: "Date Published",
			dataIndex: "date",
			key: "date",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
		},
		{
			title: "View",
			dataIndex: "view",
			key: "view",
		},
		{
			title: "Action",
			dataIndex: "action",
			key: "action",
		},
	];

	return (
		<Container>
			<Row>
				<div className="title">My Properties</div>
				<Input placeholder="Search" style={{ width: "200px" }} type="text" />
			</Row>
			<Table dataSource={dataSource} columns={columns} />
		</Container>
	);
};

export default Profile;
