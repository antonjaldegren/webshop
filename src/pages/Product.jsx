import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
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
import { numberToPrice } from "../utils";
import useCart from "../hooks/useCart";
import useCartPopover from "../hooks/useCartPopover";
import useProducts from "../hooks/useProducts";
import AnimatedPage from "../components/AnimatedPage";

function product() {
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const { addProduct } = useCart();
	const { getProductById } = useProducts();
	const { openCartPopover } = useCartPopover();

	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const productById = getProductById(id);
		if (productById) {
			setProduct(productById);
			return;
		}
		navigate("/notfound");
	}, []);

	if (!product) return null;

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | {product.title.toUpperCase()}</title>
			</Helmet>
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
					<Text fontSize="lg">${numberToPrice(product.price)}</Text>
					<Flex gap={6}>
						<HStack direction="column">
							<Button
								disabled={quantity === 1}
								onClick={() => setQuantity(quantity - 1)}
							>
								-
							</Button>
							<Center width={7}>{quantity}</Center>
							<Button onClick={() => setQuantity(quantity + 1)}>
								+
							</Button>
						</HStack>
						<Button
							flex={1}
							onClick={() => {
								addProduct(Number(id), quantity);
								openCartPopover();
							}}
						>
							Add to cart
						</Button>
					</Flex>
				</Stack>
			</Stack>
		</AnimatedPage>
	);
}

export default product;
