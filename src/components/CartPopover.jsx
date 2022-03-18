import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Text,
	Flex,
	Center,
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
import { BsCart } from "react-icons/bs";
import useCart from "../hooks/useCart";
import useCartPopover from "../hooks/useCartPopover";
import { getCartTotal } from "../recoil/cart/selectors";
import { useRecoilValue } from "recoil";

function CartPopover() {
	const { totalItems, totalPrice } = useRecoilValue(getCartTotal);
	const { isOpen, closeCartPopover, openCartPopover } = useCartPopover();
	const { cart } = useCart(useCart);

	return (
		<Popover
			preventOverflow
			placement="bottom-end"
			maxH="90vh"
			isOpen={isOpen}
		>
			<PopoverTrigger>
				<Box
					position="relative"
					display="grid"
					placeItems="center"
					cursor="pointer"
					onClick={openCartPopover}
				>
					<BsCart size={30} />
					{totalItems ? (
						<Center
							position="absolute"
							top="22%"
							left="28%"
							height="50%"
							width="50%"
						>
							<Text
								fontSize={totalItems < 100 ? 10 : 7.5}
								fontWeight="extrabold"
								userSelect="none"
							>
								{totalItems}
							</Text>
						</Center>
					) : null}
				</Box>
			</PopoverTrigger>
			<PopoverContent onBlur={closeCartPopover} margin="none">
				<PopoverArrow />
				<PopoverCloseButton onClick={closeCartPopover} />
				<PopoverHeader fontWeight="bold">
					Your shopping cart
				</PopoverHeader>
				<PopoverBody maxHeight="40vh" overflowY="scroll">
					<VStack align="flex-start" spacing={4}>
						{cart.length ? (
							cart.map((item) => (
								<Text key={`popover${item.product.id}`}>
									{item.quantity} x {item.product.title}
								</Text>
							))
						) : (
							<Text paddingY={3}>No products added</Text>
						)}
					</VStack>
				</PopoverBody>
				<PopoverFooter>
					<Flex fontWeight="bold">
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
