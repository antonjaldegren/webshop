import React from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { numberToPrice } from "../../utils";

import useProducts from "../../hooks/useProducts";

function CartItemPreview({ item }) {
	const { getProductById } = useProducts();

	const product = getProductById(item.id);

	return (
		<Flex fontSize="sm" w="100%">
			<Box maxW="75%">
				<Text display="inline" color="blackAlpha.500" letterSpacing={2}>
					{item.quantity} x{" "}
				</Text>
				<Text display="inline">{product.title}</Text>
			</Box>
			<Spacer />
			<Text>${numberToPrice(product.price * item.quantity)}</Text>
		</Flex>
	);
}

export default CartItemPreview;
