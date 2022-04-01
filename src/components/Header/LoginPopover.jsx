import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { BsPersonFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

function LoginPopover() {
	const { user, token, logout } = useAuth();
	const { onOpen, onClose, isOpen } = useDisclosure();
	const { pathname } = useLocation();
	const navigate = useNavigate();

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
					icon={
						token ? (
							<BsPersonFill size={30} />
						) : (
							<BsPerson size={30} />
						)
					}
				/>
			</PopoverTrigger>
			<PopoverContent maxW="225px">
				<PopoverArrow />
				<PopoverHeader>
					{token ? `Welcome, ${user.name.firstname}!` : "Profile"}
				</PopoverHeader>
				<PopoverCloseButton />
				<PopoverBody>
					<VStack spacing={1} alignItems="stretch">
						{!token ? (
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
						) : (
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
										logout();
										if (
											pathname === "/profile" ||
											pathname === "/admin"
										)
											navigate("/");
									}}
								>
									Log out
								</Button>
							</>
						)}
					</VStack>
				</PopoverBody>
				{user.role === "admin" ? (
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
