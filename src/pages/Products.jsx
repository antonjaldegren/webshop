import React from "react";
import { Helmet } from "react-helmet-async";
import { productsState } from "../recoil/products/atom";
import { useRecoilValue } from "recoil";
import { Heading, Stack, SimpleGrid } from "@chakra-ui/react";

import AnimatedPage from "../components/AnimatedPage";
import ProductPreview from "../components/ProductPreview";

function Products() {
	const products = useRecoilValue(productsState);

	return (
		<>
			<Helmet>
				<title>Webshop | PRODUCTS</title>
			</Helmet>
			<Stack spacing="1em">
				<Heading as="h1">Products</Heading>
				<AnimatedPage>
					<SimpleGrid minChildWidth="200px" spacing="2em">
						{products.map((product) => (
							<ProductPreview key={product.id} data={product} />
						))}
					</SimpleGrid>
				</AnimatedPage>
			</Stack>
		</>
	);
}

export default Products;
