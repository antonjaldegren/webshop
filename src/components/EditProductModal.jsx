import React, { useState, useRef } from "react";
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
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Textarea,
	Input,
	InputGroup,
	InputLeftElement,
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
import { BsLink45Deg } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { shallowEqual } from "../utils";

function EditProductModal({ product }) {
	const initialState = {
		title: product.title,
		price: product.price,
		description: product.description,
		image: product.image,
		category: product.category,
	};

	const [editedProduct, setEditedProduct] = useState(initialState);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	function handleInputChange(input, key) {
		const newDataObj = { ...editedProduct };
		newDataObj[key] = input;
		setEditedProduct(newDataObj);
	}

	function resetChanges() {
		setEditedProduct(initialState);
	}

	return (
		<>
			<Tooltip hasArrow label="Edit">
				<span>
					<BsPencilSquare cursor="pointer" onClick={onOpen} />
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
							<Flex>
								<Text as="span">Edit product</Text>
								<Spacer />
								<Button
									disabled={shallowEqual(
										initialState,
										editedProduct
									)}
									onClick={resetChanges}
								>
									Reset changes
								</Button>
							</Flex>
						</AlertDialogHeader>
						<AlertDialogBody>
							<Stack>
								<FormControl as={Stack} spacing={5}>
									<Box>
										<FormLabel htmlFor="title">
											Title
										</FormLabel>
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
										<FormLabel htmlFor="price">
											Price
										</FormLabel>
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
										<FormLabel htmlFor="image">
											Image
										</FormLabel>
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
								onClick={() => {
									removeProductFromCart(product.id);
									removeProduct(product.id);
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
