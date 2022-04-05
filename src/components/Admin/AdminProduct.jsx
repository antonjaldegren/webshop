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
	Table,
	Tbody,
	Th,
	Td,
	Tr,
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
					<Table>
						<Tbody>
							<Tr>
								<Th>Title</Th>
								<Td>{product.title}</Td>
							</Tr>
							<Tr>
								<Th>Price</Th>
								<Td>${numberToPrice(product.price)}</Td>
							</Tr>
							<Tr>
								<Th>Description</Th>
								<Td>{product.description}</Td>
							</Tr>
							<Tr>
								<Th>Image</Th>
								<Td>
									<Link
										color="blue.500"
										href={product.image}
										isExternal
									>
										{product.image}
									</Link>
								</Td>
							</Tr>
							<Tr>
								<Th>Category</Th>
								<Td>{product.category}</Td>
							</Tr>
						</Tbody>
					</Table>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminProduct;
