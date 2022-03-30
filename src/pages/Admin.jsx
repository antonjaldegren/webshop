import React from "react";
import { Helmet } from "react-helmet-async";
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
import AnimatedPage from "../components/AnimatedPage";
import useProducts from "../hooks/useProducts";
import { cartsState } from "../recoil/carts/atom";
import AdminProduct from "../components/AdminProduct";

function Admin() {
	const carts = useRecoilValue(cartsState);
	const { products } = useProducts();

	if (!carts.length) return <p>Loading...</p>;

	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | Admin</title>
			</Helmet>
			<Heading>Admin</Heading>
			<Accordion allowToggle>
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
								<AdminProduct
									key={product.id}
									product={product}
								/>
							))}
						</Accordion>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<AccordionButton>
						<Box
							as="h2"
							fontWeight="bold"
							fontSize="lg"
							flex="1"
							textAlign="left"
						>
							Carts
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						{carts.map((cart) => (
							<p key={cart.id}>{cart.id}</p>
						))}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</AnimatedPage>
	);
}

export default Admin;
