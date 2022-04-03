import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Stack,
	Flex,
	Spacer,
	Text,
	Link,
	Box,
	Heading,
} from "@chakra-ui/react";
import { numberToPrice } from "../../utils";
import RemoveProductModal from "./RemoveProductModal";
import EditProductModal from "./EditProductModal";
import AccordionPanel from "./AccordionPanel";

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
				<Stack spacing={4}>
					<Flex align="center">
						<Heading size="md">Details</Heading>
						<Spacer />
						<Flex fontSize="xl" gap={5}>
							<EditProductModal product={product} />
							<RemoveProductModal product={product} />
						</Flex>
					</Flex>
					<Text>Title: {product.title}</Text>
					<Text>Price: ${numberToPrice(product.price)}</Text>
					<Text>Description: {product.description}</Text>
					<Text>
						Image:{" "}
						<Link color="blue.500" href={product.image} isExternal>
							{product.image}
						</Link>
					</Text>
					<Text>Category: {product.category}</Text>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminProduct;
