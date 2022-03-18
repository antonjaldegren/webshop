import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";

import Header from "./components/Header";
import { useRecoilState } from "recoil";
import { cartState } from "./recoil/cart/atom";

function App() {
	const [cart, setCart] = useRecoilState(cartState);

	useEffect(() => {
		console.log("Setting cart on initial load");
		setCart(JSON.parse(localStorage.getItem("cart")) || []);
	}, []);

	useEffect(() => {
		console.log("Updating local storage on change in cart");
		const stringifiedValue = JSON.stringify(cart);
		localStorage.setItem("cart", stringifiedValue);
	}, [cart]);

	return (
		<div className="App">
			<Header />
			<Container padding="5em 1em" maxW="container.lg" minH="100vh">
				<Outlet />
			</Container>
			<Center as="footer" bg="grey" paddingY="3em">
				Footer
			</Center>
		</div>
	);
}

export default App;
