import React from "react";
import { Helmet } from "react-helmet-async";
import { Heading, Spacer, Flex, Text, Stack, Button } from "@chakra-ui/react";

import useCart from "../hooks/useCart";
import AnimatedPage from "../components/AnimatedPage";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

function Cart() {
	const { cart, totalItems, resetCart } = useCart();

	return (
		<>
			<Helmet>
				<title>Webshop | CART</title>
			</Helmet>
			<Stack>
				<Flex>
					<Heading as="h1">Your cart</Heading>
					<Spacer></Spacer>
					{totalItems ? (
						<Button onClick={resetCart}>Clear cart</Button>
					) : null}
				</Flex>
				{!totalItems ? (
					<Text fontSize="lg" paddingY={6}>
						No products added
					</Text>
				) : (
					<AnimatedPage>
						<Flex direction={["column", "column", "row"]} gap={6}>
							<Stack spacing={6} w={["100%", "100%", "60%"]}>
								{cart.map((item) => (
									<CartItem key={item.id} data={item} />
								))}
							</Stack>
							<CartSummary />
						</Flex>
					</AnimatedPage>
				)}
			</Stack>
		</>
	);
}

export default Cart;
