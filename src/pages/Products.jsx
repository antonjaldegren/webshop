import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Heading, Stack, SimpleGrid, Tag, Flex } from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";

import useProducts from "../hooks/useProducts";
import ProductPreview from "../components/ProductPreview";
import CategoryLink from "../components/CategoryLink";
import AnimatedPage from "../components/AnimatedPage";

function Products() {
	const { products, categories, getProductsByCategory } = useProducts();

	const [searchParams] = useSearchParams();
	const category = searchParams.get("category");

	const currentProducts = useMemo(() => {
		if (!category) return products;
		return getProductsByCategory(category);
	}, [category]);

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | PRODUCTS</title>
			</Helmet>
			<Stack spacing="1em">
				<Heading as="h1">Products</Heading>
				<Flex wrap="wrap" gap={3}>
					<Tag
						as={Link}
						to="/products"
						fontSize="xs"
						fontWeight={category ? "normal" : "bold"}
						color={category ? "gray.400" : "black"}
					>
						ALL
					</Tag>
					{categories.map((cat) => (
						<CategoryLink key={cat} category={cat}>
							{cat.toUpperCase()}
						</CategoryLink>
					))}
				</Flex>
				<SimpleGrid minChildWidth="200px" spacing={4}>
					{currentProducts.map((product) => (
						<ProductPreview key={product.id} product={product} />
					))}
				</SimpleGrid>
			</Stack>
		</AnimatedPage>
	);
}

export default Products;
