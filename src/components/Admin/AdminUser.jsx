import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import AccordionPanel from "./AccordionPanel";
import UserInfo from "../UserInfo";

function AdminUser({ user }) {
	return (
		<AccordionItem key={user.id}>
			<AccordionButton>
				<Box
					as="h2"
					fontWeight="bold"
					fontSize="lg"
					flex="1"
					textAlign="left"
				>
					{user.username}
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4}>
				<UserInfo user={user} />
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminUser;
