import React, { useRef } from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
	Stack,
	Flex,
	Spacer,
	Tooltip,
	Text,
	Link,
	Box,
	Heading,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import RemoveProductModal from "./RemoveProductModal";
import EditProductModal from "./EditProductModal";

function AdminProduct({ product }) {
	const { removeProduct } = useProducts();
	const { removeProductFromCart } = useCart();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

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
			<AccordionPanel>
				<Stack>
					<Flex>
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
