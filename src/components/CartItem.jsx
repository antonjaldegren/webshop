import React from "react";
import {
	Flex,
	Spacer,
	Text,
	Box,
	Button,
	Heading,
	HStack,
	VStack,
	Center,
	Image,
	AspectRatio,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function CartItem({ data: { product, quantity } }) {
	const { changeQuantity, removeProduct } = useCart();

	return (
		<HStack boxShadow="md" padding="1.5em" spacing={6}>
			<Box w="30%">
				<AspectRatio ratio={1 / 1} w="100%">
					<Box>
						<Image
							src={product.image}
							boxSize="100%"
							objectFit="contain"
						/>
					</Box>
				</AspectRatio>
			</Box>
			<VStack spacing={5} display="block" width="70%">
				<Heading
					as={Link}
					to={`/products/${product.id}`}
					size="sm"
					alignSelf="center"
				>
					{product.title}
				</Heading>
				<Text
					onClick={() => removeProduct(product)}
					textDecoration="underline"
					cursor="pointer"
				>
					Remove item
				</Text>
				<Flex>
					<HStack direction="column">
						<Button
							disabled={quantity === 1}
							onClick={() =>
								changeQuantity(product, quantity - 1)
							}
						>
							-
						</Button>
						<Center width={7}>{quantity}</Center>
						<Button
							onClick={() =>
								changeQuantity(product, quantity + 1)
							}
						>
							+
						</Button>
					</HStack>
					<Spacer></Spacer>
					<Center fontSize="lg">${product.price * quantity}</Center>
				</Flex>
			</VStack>
		</HStack>
	);
}

export default CartItem;
