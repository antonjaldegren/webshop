import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Stack,
	SimpleGrid,
	Center,
	Heading,
} from "@chakra-ui/react";
import { isDigit } from "../utils";
import AnimatedPage from "../components/AnimatedPage";
import PasswordInput from "../components/PasswordInput";
import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";

const initialState = {
	email: "",
	username: "",
	password: "",
	role: "user",
	name: {
		firstname: "",
		lastname: "",
	},
	address: {
		city: "",
		street: "",
		number: "",
		zipcode: "",
	},
	phone: "",
};

function Register() {
	const [user, setUser] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);
	const { registerUser } = useUsers();
	const { login } = useAuth();
	const navigate = useNavigate();

	async function handleRegister(e) {
		e.preventDefault();
		setIsLoading(true);
		const registerRes = await registerUser({
			...user,
			address: { ...user.address, number: Number(user.address.number) },
		});
		if (registerRes === "error") {
			setIsLoading(false);
			return;
		}

		const loginRes = await login(
			registerRes.username,
			registerRes.password
		);
		setIsLoading(false);
		if (loginRes === "error") return;
		navigate("/");
	}

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | REGISTER</title>
			</Helmet>
			<Center>
				<Stack
					as="form"
					onSubmit={handleRegister}
					spacing={5}
					padding={5}
					boxShadow="md"
					maxWidth="container.sm"
				>
					<Center>
						<Heading as="h1">Register new user</Heading>
					</Center>
					<SimpleGrid columns={2} spacing={4}>
						<FormControl isRequired>
							<FormLabel>First name</FormLabel>
							<Input
								value={user.name.firstname}
								onChange={(e) =>
									setUser({
										...user,
										name: {
											...user.name,
											firstname: e.target.value,
										},
									})
								}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Last name</FormLabel>
							<Input
								value={user.name.lastname}
								onChange={(e) =>
									setUser({
										...user,
										name: {
											...user.name,
											lastname: e.target.value,
										},
									})
								}
							/>
						</FormControl>
					</SimpleGrid>
					<FormControl isRequired>
						<FormLabel>Username</FormLabel>
						<Input
							value={user.username}
							onChange={(e) =>
								setUser({
									...user,
									username: e.target.value,
								})
							}
						/>
					</FormControl>
					<PasswordInput
						title="Password"
						isRequired={true}
						value={user.password}
						onChange={(value) =>
							setUser({ ...user, password: value })
						}
					/>
					<FormControl isRequired>
						<FormLabel>Email</FormLabel>
						<Input
							value={user.email}
							onChange={(e) =>
								setUser({
									...user,
									email: e.target.value,
								})
							}
						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Phone</FormLabel>
						<Input
							type="tel"
							value={user.phone}
							onChange={(e) =>
								setUser({
									...user,
									phone: e.target.value,
								})
							}
						/>
					</FormControl>
					<SimpleGrid columns={2} spacing={4}>
						<FormControl isRequired>
							<FormLabel>Street</FormLabel>
							<Input
								value={user.address.street}
								onChange={(e) =>
									setUser({
										...user,
										address: {
											...user.address,
											street: e.target.value,
										},
									})
								}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Street number</FormLabel>
							<Input
								value={user.address.number}
								onChange={(e) => {
									if (!isDigit(e.target.value)) return;
									setUser({
										...user,
										address: {
											...user.address,
											number: e.target.value,
										},
									});
								}}
							/>
						</FormControl>
					</SimpleGrid>
					<SimpleGrid columns={2} spacing={4}>
						<FormControl isRequired>
							<FormLabel>City</FormLabel>
							<Input
								value={user.address.city}
								onChange={(e) =>
									setUser({
										...user,
										address: {
											...user.address,
											city: e.target.value,
										},
									})
								}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Zipcode</FormLabel>
							<Input
								value={user.address.zipcode}
								onChange={(e) =>
									setUser({
										...user,
										address: {
											...user.address,
											zipcode: e.target.value,
										},
									})
								}
							/>
						</FormControl>
					</SimpleGrid>
					<SimpleGrid columns={[1, 2, 2]} spacing={4}>
						<Button
							as={Link}
							to="/login"
							colorScheme="blue"
							variant="outline"
						>
							Login
						</Button>
						<Button
							isLoading={isLoading}
							colorScheme="blue"
							type="submit"
							isDisabled={
								!user.name.firstname ||
								!user.name.lastname ||
								!user.username ||
								!user.password ||
								!user.email ||
								!user.phone ||
								!user.address.street ||
								!user.address.number ||
								!user.address.city ||
								!user.address.zipcode
							}
						>
							Register
						</Button>
					</SimpleGrid>
				</Stack>
			</Center>
		</AnimatedPage>
	);
}

export default Register;
