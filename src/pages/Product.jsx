import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
	Image,
	AspectRatio,
	Heading,
	Stack,
	Text,
	Button,
	Box,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Grid,
} from "@chakra-ui/react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import AnimatedPage from "../components/AnimatedPage";

function product() {
	const [quantity, setQuantity] = useState(1);

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
						<Grid templateColumns="1fr 3fr" gap={6}>
							<NumberInput
								defaultValue={1}
								min={1}
								max={10}
								value={quantity}
								onChange={(value) => setQuantity(Number(value))}
							>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
							<Button
								onClick={() => addProduct(product, quantity)}
							>
								Add to cart
							</Button>
						</Grid>
					</Stack>
				</Stack>
			</AnimatedPage>
		</div>
	);
}

export default product;
