import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, HStack, Spinner, Image } from "@chakra-ui/react";

import LoginPopover from "./LoginPopover";
import CartPopover from "./CartPopover";
import logoSrc from "../../logo.svg";

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
				maxW="container.xl"
				margin="0 auto"
				paddingX={4}
				paddingY={2}
				w="100%"
				align="center"
			>
				<Link to="/">
					<Image src={logoSrc} alt="logoipsum" />
				</Link>
				<HStack as="nav" spacing="min(3vw, 50px)" align="center">
					<Button
						as={Link}
						to="/products"
						variant="ghost"
						size="md"
						padding={3}
						letterSpacing={1}
						fontWeight="light"
					>
						Products
					</Button>
					<Box>
						<Suspense fallback={<Spinner />}>
							<LoginPopover />
						</Suspense>
					</Box>
					<Box>
						<Suspense fallback={<Spinner />}>
							<CartPopover />
						</Suspense>
					</Box>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Header;
