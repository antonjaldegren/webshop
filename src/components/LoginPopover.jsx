import React from "react";
import { Link } from "react-router-dom";
import {
	Flex,
	Button,
	IconButton,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { useResetRecoilState } from "recoil";
import { authState } from "../recoil/auth/atom";

function LoginPopover() {
	const auth = useRecoilValue(authState);
	const resetAuthState = useResetRecoilState(authState);
	const { onOpen, onClose, isOpen } = useDisclosure();

	return (
		<Popover
			placement="bottom-end"
			isOpen={isOpen}
			onOpen={onOpen}
			onClose={onClose}
		>
			<PopoverTrigger>
				<IconButton
					colorScheme="gray"
					variant="ghost"
					size="md"
					aria-label="Profile"
					icon={<BsPerson size={30} />}
				/>
			</PopoverTrigger>
			<PopoverContent maxW="175px">
				<PopoverArrow />
				<PopoverHeader>Profile</PopoverHeader>
				<PopoverCloseButton />
				<PopoverBody>
					<VStack spacing={1} alignItems="stretch">
						{!auth.token ? (
							<>
								<Button
									as={Link}
									to="/login"
									justifyContent="flex-start"
									colorScheme="blue"
									variant="ghost"
									onClick={onClose}
								>
									Login
								</Button>
								<Button
									as={Link}
									to="/register"
									justifyContent="flex-start"
									colorScheme="blue"
									variant="ghost"
									onClick={onClose}
								>
									Register
								</Button>
							</>
						) : null}
						{auth.token ? (
							<>
								<Button
									as={Link}
									to="/profile"
									justifyContent="flex-start"
									colorScheme="blue"
									variant="ghost"
									onClick={onClose}
								>
									My profile
								</Button>
								<Button
									justifyContent="flex-start"
									colorScheme="blue"
									variant="ghost"
									onClick={() => {
										onClose();
										resetAuthState();
									}}
								>
									Logout
								</Button>
							</>
						) : null}
					</VStack>
				</PopoverBody>
				{auth.user.role === "admin" ? (
					<PopoverFooter>
						<Flex flexDirection="column" alignItems="stretch">
							<Button
								as={Link}
								to="/admin"
								justifyContent="flex-start"
								colorScheme="blue"
								variant="ghost"
								onClick={onClose}
							>
								Admin page
							</Button>
						</Flex>
					</PopoverFooter>
				) : null}
			</PopoverContent>
		</Popover>
	);
}

export default LoginPopover;
