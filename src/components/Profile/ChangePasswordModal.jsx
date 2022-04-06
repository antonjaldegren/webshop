import React, { useState, useRef } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
	Stack,
	Flex,
	Spacer,
	Text,
	useToast,
} from "@chakra-ui/react";
import { BsShieldLock } from "react-icons/bs";
import InputError from "../InputError";
import PasswordInput from "../PasswordInput";
import useUsers from "../../hooks/useUsers";

function ChangePasswordModal({ user }) {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [oldIsWrong, setOldIsWrong] = useState(false);
	const [newIsWrong, setNewIsWrong] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const toast = useToast();
	const { editUser } = useUsers();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	async function handleSubmit(e) {
		e.preventDefault();
		if (oldPassword !== user.password || newPassword !== repeatPassword) {
			setOldIsWrong(oldPassword !== user.password);
			setNewIsWrong(newPassword !== repeatPassword);
			return;
		}

		setIsLoading(true);
		const data = await editUser({ ...user, password: newPassword });
		if (data === "error") return;
		setIsLoading(false);
		resetStates();
		toast({
			title: "Password changed!",
			status: "success",
			variant: "subtle",
			isClosable: true,
		});
		onClose();
	}

	function resetStates() {
		setOldPassword("");
		setNewPassword("");
		setRepeatPassword("");
		setOldIsWrong(false);
		setNewIsWrong(false);
	}

	return (
		<>
			<Button
				colorScheme="blue"
				variant="outline"
				leftIcon={<BsShieldLock />}
				onClick={onOpen}
			>
				Change password
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
								<Text as="span">Change password</Text>
								<Spacer />
							</Flex>
						</AlertDialogHeader>
						<form onSubmit={handleSubmit}>
							<AlertDialogBody>
								<Stack spacing={5}>
									<PasswordInput
										isRequired={true}
										isInvalid={oldIsWrong}
										title="Old password"
										value={oldPassword}
										onChange={setOldPassword}
									>
										{oldIsWrong ? (
											<InputError>
												Old password is incorrect!
											</InputError>
										) : null}
									</PasswordInput>
									<PasswordInput
										isRequired={true}
										isInvalid={newIsWrong}
										title="New password"
										value={newPassword}
										onChange={setNewPassword}
									/>
									<PasswordInput
										isRequired={true}
										isInvalid={newIsWrong}
										title="Repeat new password"
										value={repeatPassword}
										onChange={setRepeatPassword}
									>
										{newIsWrong ? (
											<InputError>
												New passwords are not matching!
											</InputError>
										) : null}
									</PasswordInput>
								</Stack>
							</AlertDialogBody>
							<AlertDialogFooter>
								<Button
									ref={cancelRef}
									onClick={() => {
										resetStates();
										onClose();
									}}
								>
									Cancel
								</Button>
								<Button
									isLoading={isLoading}
									disabled={
										!oldPassword ||
										!newPassword ||
										!repeatPassword
									}
									colorScheme="blue"
									type="submit"
									ml={4}
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

export default ChangePasswordModal;
