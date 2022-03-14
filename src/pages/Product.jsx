import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
	Image,
	Heading,
	Box,
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
import useGetProduct from "../hooks/useGetProduct";

function product() {
	const [amount, setAmount] = useState(1);
	const { id } = useParams();
	const product = useGetProduct(id);

	return (
		<div>
			<Helmet>
				<title>Webshop | {product.title}</title>
			</Helmet>
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
						<Button>Add to cart</Button>
					</Grid>
				</Stack>
				<Image src={product.image} maxW="50%" />
			</Stack>
		</div>
	);
}

export default product;
