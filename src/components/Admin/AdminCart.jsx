import React, { useMemo } from "react";
import {
	Table,
	Tbody,
	Th,
	Td,
	Tr,
	Box,
	UnorderedList,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
} from "@chakra-ui/react";
import useUsers from "../../hooks/useUsers";
import AdminCartProduct from "./AdminCartProduct";
import AccordionPanel from "./AccordionPanel";

function AdminCart({ cart }) {
	const { getUserById } = useUsers();
	const user = useMemo(() => getUserById(cart.userId), [cart]);

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
				<Table>
					<Tbody>
						<Tr>
							<Th>Cart ID</Th>
							<Td>{cart.id}</Td>
						</Tr>
						<Tr>
							<Th>User</Th>
							<Td>{user.username}</Td>
						</Tr>
						<Tr>
							<Th>Products</Th>
							<Td>
								<UnorderedList>
									{cart.products.map((product) => (
										<AdminCartProduct
											key={product.productId}
											product={product}
										/>
									))}
								</UnorderedList>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminCart;
