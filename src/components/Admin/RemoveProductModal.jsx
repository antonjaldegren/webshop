import React, { useRef, useState } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
	Text,
	useToast,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";

function RemoveProductModal({ product }) {
	const [isLoading, setIsLoading] = useState(false);
	const { removeProduct } = useProducts();
	const { removeProductFromCart } = useCart();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const toast = useToast();

	async function handleRemove() {
		setIsLoading(true);
		removeProductFromCart(product.id);
		await removeProduct(product.id);
		setIsLoading(false);
		toast({
			title: "Product removed!",
			status: "success",
			variant: "subtle",
			isClosable: true,
		});
		onClose();
	}

	return (
		<>
			<Button
				size="sm"
				colorScheme="blue"
				variant="outline"
				leftIcon={<BsTrash />}
				onClick={onOpen}
			>
				Remove
			</Button>

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
								isLoading={isLoading}
								colorScheme="red"
								onClick={handleRemove}
								ml={3}
							>
								Remove
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default RemoveProductModal;
