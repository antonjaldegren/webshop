import React from "react";
import { Helmet } from "react-helmet-async";
import { Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

function Home() {
	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | HOME</title>
			</Helmet>
			<Stack spacing="1em">
				<Heading>Home</Heading>
				<Stack align="flex-start" spacing="1em">
					<Text>Hero/Call to action</Text>
					<Button as={Link} to="/products">
						Products
					</Button>
				</Stack>
			</Stack>
		</AnimatedPage>
	);
}

export default Home;
