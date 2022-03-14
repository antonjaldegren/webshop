import React from "react";
import { Helmet } from "react-helmet-async";
import { Heading } from "@chakra-ui/react";
import AnimatedPage from "../components/AnimatedPage";

function Cart() {
	return (
		<>
			<Helmet>
				<title>Webshop | CART</title>
			</Helmet>
			<Heading as="h1">Cart</Heading>
			<AnimatedPage>Cart content</AnimatedPage>
		</>
	);
}

export default Cart;
