import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";

import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Container padding="5em 1em" maxW="container.xl" minH="100vh">
				<Outlet />
			</Container>
			<Center as="footer" bg="gray.100" paddingY="3em">
				Footer
			</Center>
		</div>
	);
}

export default App;
