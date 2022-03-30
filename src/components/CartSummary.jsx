import React, { useEffect, useState } from "react";
import {
	Heading,
	Spacer,
	Flex,
	Text,
	Box,
	Stack,
	Center,
	Button,
} from "@chakra-ui/react";
import { numberToPrice } from "../utils";

import useCart from "../hooks/useCart";

function CartSummary() {
	const [shipping, setShipping] = useState(9);
	const { totalPrice } = useCart();

	useEffect(() => setShipping(totalPrice > 100 ? 0 : 9), [totalPrice]);

	return (
		<Stack
			padding="1.5em"
			spacing={4}
			boxShadow="md"
			w={["100%", "100%", "40%"]}
			alignSelf="flex-start"
		>
			<Heading as="h2" size="md">
				Summary
			</Heading>
			<Flex>
				<Text>Subtotal</Text>
				<Spacer />
				<Text>${numberToPrice(totalPrice)}</Text>
			</Flex>
			<Box>
				<Flex>
					<Text>Shipping</Text>
					<Spacer />
					<Text>${numberToPrice(shipping)}</Text>
				</Flex>
				{totalPrice < 100 && (
					<Text paddingLeft="5%" fontSize="sm" color="gray.500">
						${numberToPrice(100 - totalPrice)} left to free
						shipping!
					</Text>
				)}
			</Box>
			<Flex
				borderY="1px"
				borderColor="gray.200"
				fontSize="lg"
				fontWeight="bold"
				paddingY="0.8em"
			>
				<Text>Total</Text>
				<Spacer />
				<Text>${numberToPrice(totalPrice + shipping)}</Text>
			</Flex>
			<Center padding="1em">
				<Button colorScheme="blue" padding="1em 2em">
					Checkout
				</Button>
			</Center>
		</Stack>
	);
}

export default CartSummary;
