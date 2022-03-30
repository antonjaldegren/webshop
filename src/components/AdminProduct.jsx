import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Stack,
	Flex,
	Spacer,
	Text,
	Link,
	Box,
	Heading,
} from "@chakra-ui/react";
import RemoveProductModal from "./RemoveProductModal";
import EditProductModal from "./EditProductModal";

function AdminProduct({ product }) {
	return (
		<AccordionItem key={`adminProduct${product.id}`}>
			<h2>
				<AccordionButton>
					<Box flex="1" textAlign="left">
						{product.title}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel borderLeft="10px solid" borderColor="gray.200">
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
					<Text>Price: ${product.price}</Text>
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
