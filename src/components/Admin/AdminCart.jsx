import React from "react";
import {
	Box,
	UnorderedList,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Stack,
	Text,
} from "@chakra-ui/react";
import useUsers from "../../hooks/useUsers";
import AdminCartProduct from "./AdminCartProduct";
import AccordionPanel from "./AccordionPanel";
import DataRow from "../DataRow";

function AdminCart({ cart }) {
	const { getUserById } = useUsers();
	const user = getUserById(cart.userId);

	return (
		<AccordionItem>
			<AccordionButton>
				<Box
					as="h2"
					fontWeight="bold"
					fontSize="lg"
					flex="1"
					textAlign="left"
				>
					Cart {cart.id} – {user.username}
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4}>
				<Stack spacing={6}>
					<DataRow title="Cart ID">
						<Text>{cart.id}</Text>
					</DataRow>
					<DataRow title="User">
						<Text>{user.username}</Text>
					</DataRow>
					<DataRow title="Products">
						<UnorderedList>
							{cart.products.map((product) => (
								<AdminCartProduct
									key={product.productId}
									product={product}
								/>
							))}
						</UnorderedList>
					</DataRow>
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminCart;
