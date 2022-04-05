import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Box,
	Text,
	Table,
	Tbody,
	Tr,
	Th,
	Td,
	Link,
} from "@chakra-ui/react";
import AccordionPanel from "./AccordionPanel";

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
							<Th>Password</Th>
							<Td>{user.password}</Td>
						</Tr>
						<Tr>
							<Th>Email</Th>
							<Td>
								<Link
									color="blue.500"
									href={`mailto:${user.email}`}
								>
									{user.email}
								</Link>
							</Td>
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
						<Tr>
							<Th>Id</Th>
							<Td>{user.id}</Td>
						</Tr>
					</Tbody>
				</Table>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminUser;
