import React from "react";
import { Accordion } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { cartsState } from "../../recoil/carts/atom";
import AdminCart from "./AdminCart";

function AdminCarts() {
	const carts = useRecoilValue(cartsState);

	return (
		<Accordion allowToggle>
			{carts.map((cart) => (
				<AdminCart key={cart.id} cart={cart} />
			))}
		</Accordion>
	);
}

export default AdminCarts;
