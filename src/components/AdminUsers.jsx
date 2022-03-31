import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Input,
	InputGroup,
	InputLeftElement,
	Box,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { usersState } from "../recoil/users/atom";
import AdminUser from "./AdminUser";

function AdminUsers() {
	const users = useRecoilValue(usersState);
	const [input, setInput] = useState("");

	return (
		<AccordionItem>
			<AccordionButton>
				<Box
					as="h2"
					fontWeight="bold"
					fontSize="lg"
					flex="1"
					textAlign="left"
				>
					Users
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4}>
				<InputGroup mb={3} maxWidth="300px">
					<InputLeftElement
						pointerEvents="none"
						color="gray.300"
						children={<BsSearch />}
					/>
					<Input
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
				</InputGroup>
				<Accordion allowToggle>
					{users
						.filter((user) =>
							user.username
								.toLowerCase()
								.includes(input.toLowerCase())
						)
						.map((user) => (
							<AdminUser key={user.id} user={user} />
						))}
				</Accordion>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminUsers;
