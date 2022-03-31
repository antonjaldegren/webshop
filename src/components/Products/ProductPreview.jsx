import React from "react";
import {
	Stack,
	Heading,
	Button,
	Image,
	Text,
	Flex,
	AspectRatio,
	Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { numberToPrice } from "../../utils";

import useCart from "../../hooks/useCart";
import useCartPopover from "../../hooks/useCartPopover";

function ProductPreview({ product }) {
	const { addProduct } = useCart();
	const { openCartPopover } = useCartPopover();

	return (
		<Stack
			padding="1em"
			justifyContent="space-between"
			boxShadow="md"
			spacing={4}
		>
			<AspectRatio ratio={1} width="100%">
				<Box>
					<Image
						src={product.image}
						alt={product.title}
						height="100%"
						objectFit="contain"
					/>
				</Box>
			</AspectRatio>
			<Heading as={Link} to={`/products/${product.id}`} size="sm">
				{product.title}
			</Heading>
			<Text>${numberToPrice(product.price)}</Text>
			<Flex gap={3}>
				<Button
					colorScheme="blue"
					variant="outline"
					as={Link}
					to={`/products/${product.id}`}
					flex={3}
					fontSize="sm"
				>
					Details
				</Button>
				<Button
					colorScheme="blue"
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
