import React from "react";
import { Center, Text, HStack, Stack } from "@chakra-ui/react";
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
	return (
		<Center as="footer" bg="gray.100" paddingY={14} color="gray.600">
			<Stack alignItems="center" spacing={10}>
				<HStack spacing={5}>
					<FaFacebookSquare size={30} />
					<FaTwitterSquare size={30} />
					<FaInstagramSquare size={30} />
				</HStack>
				<HStack spacing={50}>
					<Stack>
						<Text>Help</Text>
						<Text>Returns</Text>
						<Text>Shipping</Text>
						<Text>Order tracker</Text>
					</Stack>
					<Stack>
						<Text>About us</Text>
						<Text>Discounts</Text>
						<Text>Press</Text>
						<Text>Careers</Text>
					</Stack>
				</HStack>
				<Text fontSize="xs" color="gray.400">
					© 2022 Webshop Inc. All rights reserved
				</Text>
			</Stack>
		</Center>
	);
}

export default Footer;
