import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, HStack } from "@chakra-ui/react";
import CartPopover from "./CartPopover";

function Header() {
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
				align="center"
			>
				<Link to="/">LOGO</Link>
				<HStack as="nav" spacing="min(5vw, 50px)" align="center">
					<Link to="/products">Products</Link>
					<Box>
						<CartPopover />
					</Box>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
