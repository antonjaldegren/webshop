import React from "react";
import { useRecoilValue } from "recoil";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Heading,
} from "@chakra-ui/react";

import useProducts from "../hooks/useProducts";
import { cartsState } from "../recoil/carts/atom";
import AdminProduct from "../components/AdminProduct";

function Admin() {
	const carts = useRecoilValue(cartsState);
	const { products } = useProducts();

	if (!carts.length) return <p>Loading...</p>;

	return (
		<>
			<Heading>Admin</Heading>
			<Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Products
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Accordion allowToggle>
							{products.map((product) => (
								<AdminProduct
									key={product.id}
									product={product}
								/>
							))}
						</Accordion>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Carts
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{/* TODO: Add unique key to cart when fixed in backend */}
						{carts.map((cart) => (
							<p>{cart.id}</p>
						))}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}

export default Admin;
