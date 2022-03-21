import React from "react";
import { Stack, Heading, Button, Image, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import useCart from "../hooks/useCart";
import useCartPopover from "../hooks/useCartPopover";

function ProductPreview({ product }) {
	const { addProduct } = useCart();
	const { openCartPopover } = useCartPopover();

	return (
		<Stack
			padding="1em"
			justifyContent="space-between"
			boxShadow="md"
			spacing={5}
		>
			<Image
				src={product.image}
				alt={product.title}
				boxSize="100%"
				objectFit="contain"
			/>
			<Heading as={Link} to={`/products/${product.id}`} size="sm">
				{product.title}
			</Heading>
			<Text>${product.price}</Text>
			<Flex gap={3}>
				<Button
					as={Link}
					to={`/products/${product.id}`}
					flex={3}
					fontSize="sm"
				>
					Details
				</Button>
				<Button
					flex={5}
					onClick={() => {
						addProduct(product.id, 1);
						openCartPopover();
					}}
					fontSize="sm"
				>
					Add to cart
				</Button>
			</Flex>
		</Stack>
	);
}

export default ProductPreview;
