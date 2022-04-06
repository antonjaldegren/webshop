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
import UserInfo from "../components/UserInfo";

function Profile() {
	const { user } = useAuth();

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | PROFILE</title>
			</Helmet>
			<Center>
				<Stack
					spacing={5}
					boxShadow="md"
					p={7}
					flex={1}
					maxW="container.sm"
				>
					<Heading size="xl">{`Welcome, ${user.username}!`}</Heading>
					<HStack>
						<EditUserModal user={user} />
						<ChangePasswordModal user={user} />
					</HStack>
					<UserInfo user={user} />
				</Stack>
			</Center>
		</AnimatedPage>
	);
}

export default Profile;
