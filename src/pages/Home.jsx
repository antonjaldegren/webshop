import React from "react";
import { Helmet } from "react-helmet-async";
import {
	Heading,
	Box,
	Text,
	Button,
	Stack,
	Image,
	Center,
} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import heroImage from "../hero.svg";

function Home() {
	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | HOME</title>
			</Helmet>
			<Center minH="calc(100vh - 12em)">
				<Stack direction={["column", "column", "row"]} spacing={8}>
					<Stack spacing={8}>
						<Box>
							<Heading size="3xl">
								Looking for some random stuff?
							</Heading>
							<Heading size="2xl" color="gray.400">
								You've come to the right place.
							</Heading>
						</Box>
						<Text fontSize="xl">
							Welcome to this surprisingly ambiguous webshop. The
							most diverse and incoherent selection of goods you
							have ever come across.
						</Text>
						<Button
							as={Link}
							to="/products"
							leftIcon={<BsCart />}
							colorScheme="blue"
							size="lg"
							alignSelf="center"
							p={7}
						>
							SHOP NOW
						</Button>
					</Stack>
					<Image src={heroImage} width={["100%", "100%", "50%"]} />
				</Stack>
			</Center>
		</AnimatedPage>
	);
}

export default Home;
