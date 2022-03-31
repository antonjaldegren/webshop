import React from "react";
import { Helmet } from "react-helmet-async";
import {
	Heading,
	Text,
	Table,
	Stack,
	Tbody,
	Tr,
	Th,
	Td,
	HStack,
	Center,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import EditUserModal from "../components/Profile/EditUserModal";
import ChangePasswordModal from "../components/Profile/ChangePasswordModal";
import AnimatedPage from "../components/AnimatedPage";

function Profile() {
	const { user } = useAuth();

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | Profile</title>
			</Helmet>
			<Center>
				<Stack spacing={5} boxShadow="md" p={7}>
					<Heading size="xl">{`Welcome, ${user.name.firstname}!`}</Heading>
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
				</Stack>
			</Center>
		</AnimatedPage>
	);
}

export default Profile;
