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
	useToast,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { isEqual } from "lodash";
import useUsers from "../../hooks/useUsers";

function EditUserModal({ user }) {
	const [editedUser, setEditedUser] = useState(user);
	const [isLoading, setIsLoading] = useState(false);

	const toast = useToast();
	const { editUser } = useUsers();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	async function handleSubmit(e) {
		e.preventDefault();
		console.log("submit");

		setIsLoading(true);
		const data = await editUser(editedUser);
		if (data === "error") return;
		setIsLoading(false);
		toast({
			title: "User information updated!",
			status: "success",
			variant: "subtle",
			isClosable: true,
		});
		onClose();
	}

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
									isDisabled={isEqual(user, editedUser)}
									onClick={resetChanges}
								>
									Reset user
								</Button>
							</Flex>
						</AlertDialogHeader>
						<form onSubmit={handleSubmit}>
							<AlertDialogBody>
								<Stack spacing={5}>
									<Flex gap={4}>
										<FormControl>
											<FormLabel>First name</FormLabel>
											<Input
												value={
													editedUser.name.firstname
												}
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
										</FormControl>
										<FormControl>
											<FormLabel>Last name</FormLabel>
											<Input
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
										</FormControl>
									</Flex>
									<FormControl>
										<FormLabel>Username</FormLabel>
										<Input
											value={editedUser.username}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													username: e.target.value,
												})
											}
										/>
									</FormControl>
									<FormControl>
										<FormLabel>Email</FormLabel>
										<Input
											value={editedUser.email}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													email: e.target.value,
												})
											}
										/>
									</FormControl>
									<FormControl>
										<FormLabel>Phone</FormLabel>
										<Input
											value={editedUser.phone}
											onChange={(e) =>
												setEditedUser({
													...editedUser,
													phone: e.target.value,
												})
											}
										/>
									</FormControl>
									<Flex gap={4}>
										<FormControl>
											<FormLabel>Street</FormLabel>
											<Input
												value={
													editedUser.address.street
												}
												onChange={(e) =>
													setEditedUser({
														...editedUser,
														address: {
															...editedUser.address,
															street: e.target
																.value,
														},
													})
												}
											/>
										</FormControl>
										<FormControl>
											<FormLabel>Street number</FormLabel>
											<Input
												value={
													editedUser.address.number
												}
												onChange={(e) =>
													setEditedUser({
														...editedUser,
														address: {
															...editedUser.address,
															number: e.target
																.value,
														},
													})
												}
											/>
										</FormControl>
									</Flex>
									<Flex gap={4}>
										<FormControl>
											<FormLabel>City</FormLabel>
											<Input
												value={editedUser.address.city}
												onChange={(e) =>
													setEditedUser({
														...editedUser,
														address: {
															...editedUser.address,
															city: e.target
																.value,
														},
													})
												}
											/>
										</FormControl>
										<FormControl>
											<FormLabel>Zipcode</FormLabel>
											<Input
												value={
													editedUser.address.zipcode
												}
												onChange={(e) =>
													setEditedUser({
														...editedUser,
														address: {
															...editedUser.address,
															zipcode:
																e.target.value,
														},
													})
												}
											/>
										</FormControl>
									</Flex>
								</Stack>
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
									isLoading={isLoading}
									isDisabled={isEqual(user, editedUser)}
									type="submit"
									ml={3}
								>
									Save
								</Button>
							</AlertDialogFooter>
						</form>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default EditUserModal;
