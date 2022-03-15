import React from "react";
import {
	Flex,
	Grid,
	Text,
	Button,
	Heading,
	HStack,
	VStack,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function CartItem({ data: { product, amount } }) {
	const { changeAmount, removeProduct } = useCart();

	return (
		<VStack
			key={product.id}
			boxShadow="md"
			padding="1em"
			spacing={5}
			display="block"
		>
			<HStack align="flex-start">
				<MdCancel
					size="25"
					onClick={() => removeProduct(product)}
					color="red"
					cursor="pointer"
				/>
				<Heading
					as={Link}
					to={`/products/${product.id}`}
					size="sm"
					alignSelf="center"
				>
					{product.title}
				</Heading>
			</HStack>
			<Grid templateColumns="2fr 1fr 1fr">
				<Flex direction="column" gap={4}>
					<Text>Amount</Text>
					<HStack direction="column">
						<Button
							disabled={amount === 1}
							onClick={() => changeAmount(product, amount - 1)}
						>
							-
						</Button>
						<Text>{amount}</Text>
						<Button
							onClick={() => changeAmount(product, amount + 1)}
						>
							+
						</Button>
					</HStack>
				</Flex>
				<Flex direction="column" gap={4}>
					<Text>Price</Text>
					<Text>${product.price}</Text>
				</Flex>
				<Flex direction="column" gap={4}>
					<Text>Sub total</Text>
					<Text>${product.price * amount}</Text>
				</Flex>
			</Grid>
		</VStack>
	);
}

export default CartItem;
