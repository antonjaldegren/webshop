import React, { useRef } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
	Tooltip,
	Text,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";

function RemoveProductModal({ product }) {
	const { removeProduct } = useProducts();
	const { removeProductFromCart } = useCart();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	return (
		<>
			<Tooltip hasArrow label="Remove">
				<span>
					<BsTrash cursor="pointer" onClick={onOpen} />
				</span>
			</Tooltip>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Remove product
						</AlertDialogHeader>
						<AlertDialogBody>
							Are you sure you want to remove{" "}
							<Text as="i" textStyle="italic">
								{product.title}
							</Text>
							? You can't undo this action afterwards.
						</AlertDialogBody>
						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={() => {
									removeProductFromCart(product.id);
									removeProduct(product.id);
									onClose();
								}}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default RemoveProductModal;
