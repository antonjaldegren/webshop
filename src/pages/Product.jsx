import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
	Image,
	Heading,
	Stack,
	Text,
	Button,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Grid,
} from "@chakra-ui/react";
import useCart from "../hooks/useCart";
import useGetProduct from "../hooks/useGetProduct";
import AnimatedPage from "../components/AnimatedPage";

function product() {
	const [amount, setAmount] = useState(1);
	const { addProduct } = useCart();
	const { id } = useParams();
	const product = useGetProduct(id);

	return (
		<div>
			<Helmet>
				<title>Webshop | {product.title}</title>
			</Helmet>
			<AnimatedPage>
				<Stack direction="row" spacing="5%">
					<Stack spacing={6}>
						<Heading>{product.title}</Heading>
						<Text>{product.description}</Text>
						<Grid templateColumns="1fr 3fr" gap={6}>
							<NumberInput
								defaultValue={1}
								min={1}
								max={10}
								value={amount}
								onChange={(value) => setAmount(Number(value))}
							>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
							<Button onClick={() => addProduct(product, amount)}>
								Add to cart
							</Button>
						</Grid>
					</Stack>
					<Image src={product.image} maxW="50%" />
				</Stack>
			</AnimatedPage>
		</div>
	);
}

export default product;
