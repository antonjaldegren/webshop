import React, { useState, useRef } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	FormControl,
	FormLabel,
	Textarea,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
	Stack,
	Flex,
	Spacer,
	Text,
	useToast,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { isEqual } from "lodash";
import { isPrice } from "../../utils";
import useProducts from "../../hooks/useProducts";

function EditProductModal({ product }) {
	const [editedProduct, setEditedProduct] = useState(product);
	const [isLoading, setIsLoading] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const { editProduct } = useProducts();
	const toast = useToast();

	async function handleSubmit(e) {
		e.preventDefault();
		console.log("submit");
		setIsLoading(true);
		await editProduct({
			...editedProduct,
			price: Number(editedProduct.price),
		});
		setIsLoading(false);
		toast({
			title: "Product information updated!",
			status: "success",
			variant: "subtle",
			isClosable: true,
		});
		onClose();
	}

	function handleInputChange(input, key) {
		const newDataObj = { ...editedProduct };
		newDataObj[key] = input;
		setEditedProduct(newDataObj);
	}

	function resetChanges() {
		setEditedProduct(product);
	}

	return (
		<>
			<Button
				size="sm"
				colorScheme="blue"
				variant="outline"
				leftIcon={<BsPencilSquare />}
				onClick={onOpen}
			>
				Edit
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							<Flex>
								<Text as="span">Edit product</Text>
								<Spacer />
								<Button
									isDisabled={isEqual(product, editedProduct)}
									onClick={resetChanges}
								>
									Reset changes
								</Button>
							</Flex>
						</AlertDialogHeader>
						<form onSubmit={handleSubmit}>
							<AlertDialogBody>
								<Stack spacing={5}>
									<FormControl>
										<FormLabel>Title</FormLabel>
										<Input
											value={editedProduct.title}
											onChange={(e) =>
												handleInputChange(
													e.target.value,
													"title"
												)
											}
										/>
									</FormControl>
									<FormControl>
										<FormLabel>Price</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												color="gray.400"
												children={<BsCurrencyDollar />}
											/>
											<Input
												value={editedProduct.price}
												onChange={(e) => {
													if (
														!isPrice(e.target.value)
													)
														return;
													handleInputChange(
														e.target.value,
														"price"
													);
												}}
											/>
										</InputGroup>
									</FormControl>
									<FormControl>
										<FormLabel>Description</FormLabel>
										<Textarea
											minHeight="150px"
											value={editedProduct.description}
											onChange={(e) =>
												handleInputChange(
													e.target.value,
													"description"
												)
											}
										/>
									</FormControl>
									<FormControl>
										<FormLabel>Image</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												color="gray.400"
												children={<BsLink45Deg />}
											/>
											<Input
												value={editedProduct.image}
												onChange={(e) =>
													handleInputChange(
														e.target.value,
														"image"
													)
												}
											/>
										</InputGroup>
									</FormControl>
									<FormControl>
										<FormLabel>Category</FormLabel>
										<Input
											value={editedProduct.category}
											onChange={(e) =>
												handleInputChange(
													e.target.value.toLowerCase(),
													"category"
												)
											}
										/>
									</FormControl>
								</Stack>
							</AlertDialogBody>
							<AlertDialogFooter>
								<Button
									ref={cancelRef}
									onClick={() => {
										resetChanges();
										onClose();
									}}
								>
									Cancel
								</Button>
								<Button
									colorScheme="blue"
									isLoading={isLoading}
									isDisabled={isEqual(product, editedProduct)}
									type="submit"
									ml={3}
								>
									Save
								</Button>
							</AlertDialogFooter>
						</form>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default EditProductModal;
