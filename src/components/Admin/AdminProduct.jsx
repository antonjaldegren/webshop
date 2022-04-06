import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Stack,
	Flex,
	Spacer,
	Link,
	Box,
	Heading,
	Text,
} from "@chakra-ui/react";
import { numberToPrice } from "../../utils";
import RemoveProductModal from "./RemoveProductModal";
import EditProductModal from "./EditProductModal";
import AccordionPanel from "./AccordionPanel";
import DataRow from "../DataRow";

function AdminProduct({ product }) {
	return (
		<AccordionItem key={`adminProduct${product.id}`}>
			<h2>
				<AccordionButton>
					<Box
						as="h2"
						fontWeight="bold"
						fontSize="lg"
						flex="1"
						textAlign="left"
					>
						{product.title}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel>
				<Stack spacing={6}>
					<Flex align="center">
						<Heading size="md">Details</Heading>
						<Spacer />
						<Flex fontSize="xl" gap={5}>
							<EditProductModal product={product} />
							<RemoveProductModal product={product} />
						</Flex>
					</Flex>
					<DataRow title="Title">
						<Text>{product.title}</Text>
					</DataRow>
					<DataRow title="Price">
						<Text>${numberToPrice(product.price)}</Text>
					</DataRow>
					<DataRow title="Description">
						<Text>{product.description}</Text>
					</DataRow>
					<DataRow title="Image">
						<Link color="blue.500" href={product.image} isExternal>
							{product.image}
						</Link>
					</DataRow>
					<DataRow title="Category">
						<Text>{product.category}</Text>
					</DataRow>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminProduct;
