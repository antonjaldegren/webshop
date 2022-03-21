import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
import AnimatedPage from "../components/AnimatedPage";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import { useRecoilValue } from "recoil";
import { getCartTotal } from "../recoil/cart/selectors";

function Cart() {
	const [shipping, setShipping] = useState(9);
	const { cart, resetCart } = useCart();
	const { totalPrice } = useRecoilValue(getCartTotal);

	useEffect(() => setShipping(totalPrice > 100 ? 0 : 9), [totalPrice]);

	return (
		<>
			<Helmet>
				<title>Webshop | CART</title>
			</Helmet>
			<Stack>
				<Flex>
					<Heading as="h1">Cart</Heading>
					<Spacer></Spacer>
					{cart.length ? (
						<Button onClick={resetCart}>Clear cart</Button>
					) : null}
				</Flex>
				{!cart.length ? (
					<Text fontSize="lg">No products added</Text>
				) : (
					<AnimatedPage>
						<Flex direction={["column", "column", "row"]} gap={6}>
							<Stack spacing={6} w={["100%", "100%", "60%"]}>
								{cart.map((item) => (
									<CartItem
										key={item.product.id}
										data={item}
									/>
								))}
							</Stack>
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
									<Text>${totalPrice}</Text>
								</Flex>
								<Box>
									<Flex>
										<Text>Shipping</Text>
										<Spacer />
										<Text>${shipping}</Text>
									</Flex>
									{totalPrice < 100 && (
										<Text
											paddingLeft="5%"
											fontSize="sm"
											color="#FFAE42"
										>
											${99 - totalPrice} left to free
											shipping!
										</Text>
									)}
								</Box>
								<Flex
									borderY="1px solid #ededed"
									fontSize="lg"
									fontWeight="bold"
									paddingY="0.8em"
								>
									<Text>Total</Text>
									<Spacer />
									<Text>${totalPrice + shipping}</Text>
								</Flex>
								<Center padding="1em">
									<Button padding="1em 2em">Checkout</Button>
								</Center>
							</Stack>
						</Flex>
					</AnimatedPage>
				)}
			</Stack>
		</>
	);
}

export default Cart;
