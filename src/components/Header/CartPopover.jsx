import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Text,
	Flex,
	Button,
	IconButton,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	VStack,
	Spacer,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { numberToPrice } from "../../utils";

import useCart from "../../hooks/useCart";
import CartItemPreview from "./CartItemPreview";
import CartIcon from "./CartIcon";
import useCartPopover from "../../hooks/useCartPopover";

function CartPopover() {
	const { isOpen, closeCartPopover, openCartPopover } = useCartPopover();
	const { cart, totalItems, totalPrice } = useCart(useCart);

	return (
		<Popover placement="bottom-end" isOpen={isOpen}>
			<PopoverTrigger>
				<Box>
					<IconButton
						colorScheme="gray"
						variant="ghost"
						size="md"
						aria-label="Profile"
						icon={<CartIcon size={29} />}
					/>
				</Box>
			</PopoverTrigger>
			<PopoverContent onBlur={closeCartPopover} margin="none">
				<PopoverArrow />
				<PopoverCloseButton onClick={closeCartPopover} />
				<PopoverHeader fontWeight="bold">Your cart</PopoverHeader>
				<PopoverBody maxHeight="40vh" overflowY="scroll">
					<VStack align="flex-start" spacing={4}>
						{totalItems ? (
							cart.map((item) => (
								<CartItemPreview key={item.id} item={item} />
							))
						) : (
							<Alert status="info" variant="left-accent">
								<AlertIcon />
								No products added!
							</Alert>
						)}
					</VStack>
				</PopoverBody>
				<PopoverFooter>
					<Flex fontWeight="bold" paddingY={2}>
						<Text>Total</Text>
						<Spacer />
						<Text>${numberToPrice(totalPrice)}</Text>
					</Flex>
					<Flex gap={4} paddingY={2}>
						<Button
							colorScheme="blue"
							variant="outline"
							as={Link}
							onFocus={openCartPopover}
							onClick={closeCartPopover}
							to="/cart"
							flex={1}
						>
							View cart
						</Button>
						<Button
							colorScheme="blue"
							onFocus={openCartPopover}
							onClick={closeCartPopover}
							disabled={!totalItems}
							flex={1}
						>
							Checkout
						</Button>
					</Flex>
				</PopoverFooter>
			</PopoverContent>
		</Popover>
	);
}

export default CartPopover;
