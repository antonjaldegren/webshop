import React, { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	FormControl,
	Button,
	Stack,
	Flex,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { BsShieldLock } from "react-icons/bs";
import { updateUser } from "../api";
import { authState } from "../recoil/auth/atom";
import InputError from "./InputError";
import PasswordInput from "./PasswordInput";

function ChangePasswordModal() {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const [oldIsWrong, setOldIsWrong] = useState(false);
	const [newIsWrong, setNewIsWrong] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [auth, setAuth] = useRecoilState(authState);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	function handleLogin() {
		if (oldPassword !== auth.user.password) {
			setOldIsWrong(true);
			if (newPassword !== repeatPassword) setNewIsWrong(true);
			return;
		}
		setIsLoading(true);
		updateUser(auth.user.id, { ...auth.user, password: newPassword }).then(
			(data) => {
				data && setAuth({ ...auth, user: data });
				setIsLoading(false);
				resetStates();
				onClose();
			}
		);
	}

	function resetStates() {
		setOldPassword("");
		setNewPassword("");
		setRepeatPassword("");
		setOldIsWrong("");
		setNewIsWrong("");
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
						<AlertDialogBody>
							<FormControl as={Stack} spacing={5}>
								<PasswordInput
									isInvalid={oldIsWrong}
									title="Old password"
									id="oldPassword"
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
									isInvalid={newIsWrong}
									title="New password"
									id="newPassword"
									value={newPassword}
									onChange={setNewPassword}
								/>
								<PasswordInput
									isInvalid={newIsWrong}
									title="Repeat new password"
									id="repeatPassword"
									value={repeatPassword}
									onChange={setRepeatPassword}
								>
									{newIsWrong ? (
										<InputError>
											New passwords are not matching!
										</InputError>
									) : null}
								</PasswordInput>
							</FormControl>
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
								onClick={() => {
									handleLogin();
								}}
								ml={4}
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

export default ChangePasswordModal;
