import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Text,
	Flex,
	Button,
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
} from "@chakra-ui/react";
import useCart from "../hooks/useCart";
import useCartPopover from "../hooks/useCartPopover";
import CartItemPreview from "./CartItemPreview";
import CartIcon from "./CartIcon";

function CartPopover() {
	const { isOpen, closeCartPopover, openCartPopover } = useCartPopover();
	const { cart, totalItems, totalPrice } = useCart(useCart);

	return (
		<Popover placement="bottom-end" maxH="90vh" isOpen={isOpen}>
			<PopoverTrigger>
				<Box>
					<CartIcon />
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
							<Text paddingY={3}>No products added</Text>
						)}
					</VStack>
				</PopoverBody>
				<PopoverFooter>
					<Flex fontWeight="bold" paddingY={2}>
						<Text>Total</Text>
						<Spacer />
						<Text>${totalPrice}</Text>
					</Flex>
					<Flex gap={4} paddingY={2}>
						<Button
							as={Link}
							onFocus={openCartPopover}
							onClick={closeCartPopover}
							to="/cart"
							flex={1}
						>
							View cart
						</Button>
						<Button
							onFocus={openCartPopover}
							onClick={closeCartPopover}
							disabled={!cart.length}
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
