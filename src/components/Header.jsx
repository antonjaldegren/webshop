import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex, HStack } from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";
import { getCartTotal } from "../recoil/cart/selectors";
import { useRecoilValue } from "recoil";

function Header() {
	const { totalItems } = useRecoilValue(getCartTotal);

	return (
		<Box
			as="header"
			position="fixed"
			w="100%"
			bg="rgba(255, 255, 255, 0.8)"
			backdropFilter="saturate(180%) blur(5px)"
			boxShadow="sm"
			zIndex="999"
		>
			<Flex
				justify="space-between"
				maxW="container.lg"
				margin="0 auto"
				padding="1em"
				w="100%"
			>
				<Link to="/">LOGO</Link>
				<HStack as="nav" spacing="min(5vw, 50px)" align="center">
					<Link to="/">Home</Link>
					<Link to="/products">Products</Link>
					<Link to="/cart">
						<Box
							position="relative"
							display="grid"
							placeItems="center"
						>
							<BsBag size={30} />
							{totalItems ? (
								<Text
									position="absolute"
									fontSize={11}
									top="35%"
								>
									{totalItems}
								</Text>
							) : null}
						</Box>
					</Link>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
