import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<HelmetProvider>
				<ChakraProvider>
					<BrowserRouter>
						<AnimatePresence exitBeforeEnter>
							<App />
						</AnimatePresence>
					</BrowserRouter>
				</ChakraProvider>
			</HelmetProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);
