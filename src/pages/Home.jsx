import React from "react";
import { Helmet } from "react-helmet-async";
import { Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

function Home() {
	return (
		<>
			<Helmet>
				<title>Webshop | HOME</title>
			</Helmet>
			<Stack spacing="1em">
				<Heading>Home</Heading>
				<AnimatedPage>
					<Stack align="flex-start" spacing="1em">
						<Text>Text i home</Text>
						<Button as={Link} to="/products">
							Products
						</Button>
					</Stack>
				</AnimatedPage>
			</Stack>
		</>
	);
}

export default Home;
