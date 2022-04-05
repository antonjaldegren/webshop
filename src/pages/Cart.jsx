import React from "react";
import { Helmet } from "react-helmet-async";
import {
	Heading,
	Spacer,
	Flex,
	Text,
	Stack,
	Button,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import AnimatedPage from "../components/AnimatedPage";
import useCart from "../hooks/useCart";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";

function Cart() {
	const { cart, totalItems, resetCart } = useCart();

	return (
		<AnimatedPage>
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
					<Alert status="info" variant="left-accent" fontSize="lg">
						<AlertIcon />
						No products added!
					</Alert>
				) : (
					<Flex direction={["column", "column", "row"]} gap={6}>
						<Stack spacing={6} w={["100%", "100%", "60%"]}>
							{cart.map((item) => (
								<CartItem key={item.id} data={item} />
							))}
						</Stack>
						<CartSummary />
					</Flex>
				)}
			</Stack>
		</AnimatedPage>
	);
}

export default Cart;
