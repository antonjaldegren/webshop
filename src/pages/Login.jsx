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
import AnimatedPage from "../components/AnimatedPage";
import PasswordInput from "../components/PasswordInput";
import InputError from "../components/InputError";
import useAuth from "../hooks/useAuth";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginHasFailed, setLoginHasFailed] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { login } = useAuth();
	const navigate = useNavigate();

	async function handleLogin(e) {
		e.preventDefault();
		setIsLoading(true);
		const response = await login(username, password);
		setIsLoading(false);

		if (response === "error") {
			setLoginHasFailed(true);
			return;
		}

		navigate("/");
	}

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | LOGIN</title>
			</Helmet>
			<Center>
				<FormControl maxWidth="container.sm">
					<Stack
						as="form"
						onSubmit={handleLogin}
						spacing={5}
						padding={5}
						boxShadow="md"
					>
						<Center>
							<Heading as="h1">Login</Heading>
						</Center>
						<FormControl isRequired>
							<FormLabel>Username</FormLabel>
							<Input
								isInvalid={loginHasFailed}
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</FormControl>
						<PasswordInput
							title="Password"
							isInvalid={loginHasFailed}
							isRequired={true}
							value={password}
							onChange={setPassword}
						>
							{loginHasFailed ? (
								<InputError>
									Username or password is wrong!
								</InputError>
							) : null}
						</PasswordInput>
						<SimpleGrid columns={[1, 2, 2]} spacing={4}>
							<Button
								colorScheme="blue"
								variant="outline"
								as={Link}
								to="/register"
							>
								Register
							</Button>
							<Button
								isLoading={isLoading}
								isDisabled={!username || !password}
								colorScheme="blue"
								type="submit"
							>
								Login
							</Button>
						</SimpleGrid>
					</Stack>
				</FormControl>
			</Center>
		</AnimatedPage>
	);
}

export default Login;
