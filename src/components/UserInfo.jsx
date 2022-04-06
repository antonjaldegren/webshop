import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import DataRow from "./DataRow";

function UserInfo({ user }) {
	return (
		<Stack spacing={6}>
			<DataRow title="First name">
				<Text>{user.name.firstname}</Text>
			</DataRow>
			<DataRow title="Last name">
				<Text>{user.name.lastname}</Text>
			</DataRow>
			<DataRow title="Username">
				<Text>{user.username}</Text>
			</DataRow>
			<DataRow title="Password">
				<Text>{user.password}</Text>
			</DataRow>
			<DataRow title="Email">
				<Text>{user.email}</Text>
			</DataRow>
			<DataRow title="Phone">
				<Text>{user.phone}</Text>
			</DataRow>
			<DataRow title="Address">
				<Box>
					<Text>{user.address.street}</Text>
					<Text>{user.address.number}</Text>
					<Text>{user.address.city}</Text>
					<Text>{user.address.zipcode}</Text>
				</Box>
			</DataRow>
			<DataRow title="Id">
				<Text>{user.id}</Text>
			</DataRow>
		</Stack>
	);
}

export default UserInfo;
