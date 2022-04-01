import React, { useMemo } from "react";
import { ListItem } from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";

function AdminCartProduct({ product }) {
	const { getProductById } = useProducts();
	const productData = useMemo(() => getProductById(product.productId), []);

	return <ListItem>{productData.title}</ListItem>;
}

export default AdminCartProduct;
