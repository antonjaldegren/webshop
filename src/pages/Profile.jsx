import React from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/auth/atom";
import {
	Heading,
	Text,
	Table,
	Tbody,
	Tr,
	Th,
	Td,
	HStack,
} from "@chakra-ui/react";
import EditUserModal from "../components/EditUserModal";
import ChangePasswordModal from "../components/ChangePasswordModal";
import AnimatedPage from "../components/AnimatedPage";

function Profile() {
	const { user } = useRecoilValue(authState);

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | Profile</title>
			</Helmet>
			<Heading>My Profile</Heading>
			<HStack>
				<EditUserModal user={user} />
				<ChangePasswordModal user={user} />
			</HStack>
			<Table>
				<Tbody>
					<Tr>
						<Th>First name</Th>
						<Td>{user.name.firstname}</Td>
					</Tr>
					<Tr>
						<Th>Last name</Th>
						<Td>{user.name.lastname}</Td>
					</Tr>
					<Tr>
						<Th>Username</Th>
						<Td>{user.username}</Td>
					</Tr>
					<Tr>
						<Th>Email</Th>
						<Td>{user.email}</Td>
					</Tr>
					<Tr>
						<Th>Phone</Th>
						<Td>{user.phone}</Td>
					</Tr>
					<Tr>
						<Th>Address</Th>
						<Td>
							<Text>{user.address.street}</Text>
							<Text>{user.address.number}</Text>
							<Text>{user.address.city}</Text>
							<Text>{user.address.zipcode}</Text>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</AnimatedPage>
	);
}

export default Profile;
