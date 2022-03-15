import React from "react";
import { Helmet } from "react-helmet-async";
import { Heading, Box, Text, Button, HStack } from "@chakra-ui/react";
import AnimatedPage from "../components/AnimatedPage";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCartTotal } from "../recoil/cart/selectors";

function Cart() {
	const { cart } = useCart();
	const { totalItems, totalPrice } = useRecoilValue(getCartTotal);
	console.log(totalItems, totalPrice);

	return (
		<>
			<Helmet>
				<title>Webshop | CART</title>
			</Helmet>
			<Heading as="h1">Cart</Heading>
			<AnimatedPage>
				{cart.map((item) => (
					<CartItem key={item.product.id} data={item} />
				))}
				<Box>Number of items: {totalItems}</Box>
				<Box>Total: ${totalPrice}</Box>
			</AnimatedPage>
		</>
	);
}

export default Cart;
