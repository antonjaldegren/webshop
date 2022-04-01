import React from "react";
import {
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Accordion,
	Box,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { cartsState } from "../../recoil/carts/atom";
import AdminCart from "./AdminCart";

function AdminCarts() {
	const carts = useRecoilValue(cartsState);

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
					Carts
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4}>
				<Accordion allowToggle>
					{carts.map((cart) => (
						<AdminCart key={cart.id} cart={cart} />
					))}
				</Accordion>
			</AccordionPanel>
		</AccordionItem>
	);
}

export default AdminCarts;
