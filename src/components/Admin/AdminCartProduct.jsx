import React from "react";
import { ListItem, Text } from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";

function AdminCartProduct({ product }) {
	const { getProductById } = useProducts();
	const productData = getProductById(product.productId);

	return (
		<ListItem>
			{productData ? (
				productData.title
			) : (
				<Text as="i" color="gray.400">
					Product no longer available
				</Text>
			)}
		</ListItem>
	);
}

export default AdminCartProduct;
