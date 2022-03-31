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
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/auth/atom";
import { login, getSingleUser } from "../api";
import AnimatedPage from "../components/AnimatedPage";
import PasswordInput from "../components/PasswordInput";
import InputError from "../components/InputError";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginHasFailed, setLoginHasFailed] = useState(false);

	const setAuth = useSetRecoilState(authState);
	const navigate = useNavigate();

	async function handleLogin() {
		const loginData = await login({
			username: username,
			password: password,
		});

		if (!loginData) {
			setLoginHasFailed(true);
			return;
		}

		const userData = await getSingleUser(loginData.userId);
		setAuth({ token: loginData.token, user: userData });
		navigate("/");
	}

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | Login</title>
			</Helmet>
			<Center>
				<FormControl maxWidth="container.sm">
					<Stack spacing={5} padding={5} boxShadow="md">
						<Center>
							<Heading as="h1">Login</Heading>
						</Center>
						<Box>
							<FormLabel htmlFor="username">Username</FormLabel>
							<Input
								isInvalid={loginHasFailed}
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Box>
						<PasswordInput
							title="Password"
							isInvalid={loginHasFailed}
							id="password"
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
								onClick={() => {}}
							>
								Register
							</Button>
							<Button colorScheme="blue" onClick={handleLogin}>
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
