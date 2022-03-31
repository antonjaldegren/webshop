import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { cartsState } from "../recoil/carts/atom";
import AdminProduct from "../components/AdminProduct";

function AdminProducts() {
	const carts = useRecoilValue(cartsState);
	const { products } = useProducts();
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
					Products
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4}>
				<Accordion allowToggle>
					{products.map((product) => (
						<AdminProduct key={product.id} product={product} />
					))}
				</Accordion>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminProducts;
