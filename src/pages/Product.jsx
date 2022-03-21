import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
	Image,
	AspectRatio,
	Heading,
	Stack,
	HStack,
	Text,
	Button,
	Box,
	Center,
	Flex,
} from "@chakra-ui/react";
import useCart from "../hooks/useCart";
import useCartPopover from "../hooks/useCartPopover";
import useProducts from "../hooks/useProducts";
import AnimatedPage from "../components/AnimatedPage";

function product() {
	const [quantity, setQuantity] = useState(1);
	const { openCartPopover } = useCartPopover();

	const { id } = useParams();
	const { addProduct } = useCart();
	const { getProductById } = useProducts();

	const product = useMemo(() => getProductById(id), [id]);

	return (
		<div>
			<Helmet>
				<title>Webshop | {product.title}</title>
			</Helmet>
			<AnimatedPage>
				<Stack direction={["column", "column", "row"]} spacing="5%">
					<Box w={["100%", "100%", "50%"]}>
						<AspectRatio ratio={1 / 1} w="100%">
							<Box>
								<Image
									src={product.image}
									alt={product.title}
									boxSize="100%"
									objectFit="contain"
								/>
							</Box>
						</AspectRatio>
					</Box>
					<Stack spacing={6} w={["100%", "100%", "50%"]}>
						<Heading>{product.title}</Heading>
						<Text>{product.description}</Text>
						<Text fontSize="lg">${product.price}</Text>
						<Flex gap={6}>
							<HStack direction="column">
								<Button
									disabled={quantity === 1}
									onClick={() => setQuantity(quantity - 1)}
								>
									-
								</Button>
								<Center width={7}>{quantity}</Center>
								<Button
									onClick={() => setQuantity(quantity + 1)}
								>
									+
								</Button>
							</HStack>
							<Button
								flex={1}
								onClick={() => {
									addProduct(id, quantity);
									openCartPopover();
								}}
							>
								Add to cart
							</Button>
						</Flex>
					</Stack>
				</Stack>
			</AnimatedPage>
		</div>
	);
}

export default product;
