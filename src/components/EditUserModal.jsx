import React, { useState, useRef } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	Button,
	Stack,
	Flex,
	Spacer,
	Text,
	Box,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { isEqual } from "lodash";

function EditUserModal({ user }) {
	const [editedUser, setEditedUser] = useState(user);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	function resetChanges() {
		setEditedUser(user);
	}

	return (
		<>
			<Button
				colorScheme="blue"
				variant="outline"
				leftIcon={<BsPencilSquare />}
				onClick={onOpen}
			>
				Edit user
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							<Flex>
								<Text as="span">Edit user</Text>
								<Spacer />
								<Button
									disabled={isEqual(user, editedUser)}
									onClick={resetChanges}
								>
									Reset user
								</Button>
							</Flex>
						</AlertDialogHeader>
						<AlertDialogBody>
							<FormControl as={Stack} spacing={5}>
								<Flex gap={4}>
									<Box>
										<FormLabel htmlFor="firstname">
											First name
										</FormLabel>
										<Input
											id="firstname"
											value={editedUser.name.firstname}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													name: {
														...editedUser.name,
														firstname:
															e.target.value,
													},
												})
											}
										/>
									</Box>
									<Box>
										<FormLabel htmlFor="lastname">
											Last name
										</FormLabel>
										<Input
											id="lastname"
											value={editedUser.name.lastname}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													name: {
														...editedUser.name,
														lastname:
															e.target.value,
													},
												})
											}
										/>
									</Box>
								</Flex>
								<Box>
									<FormLabel htmlFor="username">
										Username
									</FormLabel>
									<Input
										id="username"
										value={editedUser.username}
										onChange={(e) =>
											setEditedUser({
												...editedUser,
												username: e.target.value,
											})
										}
									/>
								</Box>
								<Box>
									<FormLabel htmlFor="email">Email</FormLabel>
									<Input
										id="email"
										value={editedUser.email}
										onChange={(e) =>
											setEditedUser({
												...editedUser,
												email: e.target.value,
											})
										}
									/>
								</Box>
								<Box>
									<FormLabel htmlFor="phone">Phone</FormLabel>
									<Input
										id="phone"
										value={editedUser.phone}
										onChange={(e) =>
											setEditedUser({
												...editedUser,
												phone: e.target.value,
											})
										}
									/>
								</Box>
								<Flex gap={5}>
									<Box>
										<FormLabel htmlFor="street">
											Street
										</FormLabel>
										<Input
											id="street"
											value={editedUser.address.street}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													address: {
														...editedUser.address,
														street: e.target.value,
													},
												})
											}
										/>
									</Box>
									<Box>
										<FormLabel htmlFor="number">
											Street number
										</FormLabel>
										<Input
											id="number"
											value={editedUser.address.number}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													address: {
														...editedUser.address,
														number: e.target.value,
													},
												})
											}
										/>
									</Box>
								</Flex>
								<Flex gap={5}>
									<Box>
										<FormLabel htmlFor="city">
											City
										</FormLabel>
										<Input
											id="city"
											value={editedUser.address.city}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													address: {
														...editedUser.address,
														city: e.target.value,
													},
												})
											}
										/>
									</Box>
									<Box>
										<FormLabel htmlFor="zipcode">
											Zipcode
										</FormLabel>
										<Input
											id="zipcode"
											value={editedUser.address.zipcode}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													address: {
														...editedUser.address,
														zipcode: e.target.value,
													},
												})
											}
										/>
									</Box>
								</Flex>
							</FormControl>
						</AlertDialogBody>
						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={() => {
									resetChanges();
									onClose();
								}}
							>
								Cancel
							</Button>
							<Button
								colorScheme="blue"
								onClick={() => {
									// removeProductFromCart(product.id);
									// removeProduct(product.id);
									onClose();
								}}
								ml={3}
							>
								Save
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default EditUserModal;
