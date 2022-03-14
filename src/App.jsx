import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Outlet } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";

import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Container padding="5em 1em" maxW="container.lg" minHeight="100vh">
				<Outlet />
			</Container>
			<Center as="footer" bg="grey" paddingY="3em">
				Footer
			</Center>
		</div>
	);
}

export default App;
