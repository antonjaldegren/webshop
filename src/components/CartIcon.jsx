import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";

import useCart from "../hooks/useCart";
import useCartPopover from "../hooks/useCartPopover";

function CartIcon() {
	const { openCartPopover } = useCartPopover();
	const { totalItems } = useCart(useCart);

	return (
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
	);
}

export default CartIcon;
