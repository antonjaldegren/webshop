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
	Box,
	Center,
	Heading,
} from "@chakra-ui/react";
import { addNewUser } from "../api";
import AnimatedPage from "../components/AnimatedPage";
import PasswordInput from "../components/PasswordInput";

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
	const navigate = useNavigate();

	function handleRegister() {
		setIsLoading(true);
		addNewUser(user).then((userData) => {
			setIsLoading(false);
			if (userData.status !== "error") {
				navigate("/login");
			}
		});
	}

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | REGISTER</title>
			</Helmet>
			<Center>
				<FormControl maxWidth="container.sm">
					<Stack spacing={5} padding={5} boxShadow="md">
						<Center>
							<Heading as="h1">Register new user</Heading>
						</Center>
						<SimpleGrid columns={2} spacing={4}>
							<Box>
								<FormLabel htmlFor="firstname">
									First name
								</FormLabel>
								<Input
									id="firstname"
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
							</Box>
							<Box>
								<FormLabel htmlFor="lastname">
									Last name
								</FormLabel>
								<Input
									id="lastname"
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
							</Box>
						</SimpleGrid>
						<Box>
							<FormLabel htmlFor="username">Username</FormLabel>
							<Input
								id="username"
								value={user.username}
								onChange={(e) =>
									setUser({
										...user,
										username: e.target.value,
									})
								}
							/>
						</Box>
						<PasswordInput
							title="Password"
							isInvalid={false}
							id="password"
							value={user.password}
							onChange={(value) =>
								setUser({ ...user, password: value })
							}
						/>
						<Box>
							<FormLabel htmlFor="email">Email</FormLabel>
							<Input
								id="email"
								value={user.email}
								onChange={(e) =>
									setUser({
										...user,
										email: e.target.value,
									})
								}
							/>
						</Box>
						<Box>
							<FormLabel htmlFor="phone">Phone</FormLabel>
							<Input
								id="phone"
								type="tel"
								value={user.phone}
								onChange={(e) =>
									setUser({
										...user,
										phone: e.target.value,
									})
								}
							/>
						</Box>
						<SimpleGrid columns={2} spacing={4}>
							<Box>
								<FormLabel htmlFor="street">Street</FormLabel>
								<Input
									id="street"
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
							</Box>
							<Box>
								<FormLabel htmlFor="number">
									Street number
								</FormLabel>
								<Input
									id="number"
									value={user.address.number}
									onChange={(e) =>
										setUser({
											...user,
											address: {
												...user.address,
												number: e.target.value,
											},
										})
									}
								/>
							</Box>
						</SimpleGrid>
						<SimpleGrid columns={2} spacing={4}>
							<Box>
								<FormLabel htmlFor="city">City</FormLabel>
								<Input
									id="city"
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
							</Box>
							<Box>
								<FormLabel htmlFor="zipcode">Zipcode</FormLabel>
								<Input
									id="zipcode"
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
							</Box>
						</SimpleGrid>
						<SimpleGrid columns={[1, 2, 2]} spacing={4}>
							<Button
								as={Link}
								to="/login"
								colorScheme="blue"
								variant="outline"
								onClick={() => {}}
							>
								Login
							</Button>
							<Button
								isLoading={isLoading}
								colorScheme="blue"
								onClick={handleRegister}
								disabled={
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
				</FormControl>
			</Center>
		</AnimatedPage>
	);
}

export default Register;
