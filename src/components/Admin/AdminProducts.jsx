import React, { useEffect, useState } from "react";
import { Accordion } from "@chakra-ui/react";
import useProducts from "../../hooks/useProducts";
import AdminProduct from "./AdminProduct";
import SearchField from "./SearchField";

function AdminProducts() {
	const [input, setInput] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const { products } = useProducts();

	useEffect(
		() =>
			setFilteredProducts(
				products.filter((product) =>
					product.title.toLowerCase().includes(input.toLowerCase())
				)
			),
		[input, products]
	);

	return (
		<>
			<SearchField value={input} onChange={setInput} />
			<Accordion allowToggle>
				{filteredProducts.map((product) => (
					<AdminProduct key={product.id} product={product} />
				))}
			</Accordion>
		</>
	);
}

export default AdminProducts;
