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
	Box,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { isEqual } from "lodash";
import useProducts from "../hooks/useProducts";

function EditProductModal({ product }) {
	const [editedProduct, setEditedProduct] = useState(product);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const { editProduct } = useProducts();

	function saveEdit() {
		editProduct(editedProduct);
	}

	function handleInputChange(input, key) {
		const newDataObj = { ...editedProduct };
		newDataObj[key] = input;
		setEditedProduct(newDataObj);
		console.log(editedProduct);
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
									disabled={isEqual(product, editedProduct)}
									onClick={resetChanges}
								>
									Reset changes
								</Button>
							</Flex>
						</AlertDialogHeader>
						<AlertDialogBody>
							<FormControl as={Stack} spacing={5}>
								<Box>
									<FormLabel htmlFor="title">Title</FormLabel>
									<Input
										id="title"
										value={editedProduct.title}
										onChange={(e) =>
											handleInputChange(
												e.target.value,
												"title"
											)
										}
									/>
								</Box>
								<Box>
									<FormLabel htmlFor="price">Price</FormLabel>
									<InputGroup>
										<InputLeftElement
											pointerEvents="none"
											color="gray.400"
											children={<BsCurrencyDollar />}
										/>
										<Input
											id="price"
											value={editedProduct.price}
											onChange={(e) =>
												handleInputChange(
													e.target.value,
													"price"
												)
											}
										/>
									</InputGroup>
								</Box>
								<Box>
									<FormLabel htmlFor="description">
										Description
									</FormLabel>
									<Textarea
										minHeight="150px"
										id="description"
										value={editedProduct.description}
										onChange={(e) =>
											handleInputChange(
												e.target.value,
												"description"
											)
										}
									/>
								</Box>
								<Box>
									<FormLabel htmlFor="image">Image</FormLabel>
									<InputGroup>
										<InputLeftElement
											pointerEvents="none"
											color="gray.400"
											children={<BsLink45Deg />}
										/>
										<Input
											id="image"
											value={editedProduct.image}
											onChange={(e) =>
												handleInputChange(
													e.target.value,
													"image"
												)
											}
										/>
									</InputGroup>
								</Box>
								<Box>
									<FormLabel htmlFor="category">
										Category
									</FormLabel>
									<Input
										id="category"
										value={editedProduct.category}
										onChange={(e) =>
											handleInputChange(
												e.target.value.toLowerCase(),
												"category"
											)
										}
									/>
								</Box>
							</FormControl>
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
								onClick={() => {
									saveEdit();
									onClose();
								}}
								ml={3}
							>
								Save
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export default EditProductModal;
