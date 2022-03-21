import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<HelmetProvider>
				<ChakraProvider>
					<BrowserRouter>
						<AnimatePresence exitBeforeEnter>
							<Routes>
								<Route path="/" element={<App />}>
									<Route index element={<Home />} />
									<Route
										path="/products"
										element={<Products />}
									/>
									<Route
										path="/products/:id"
										element={<Product />}
									/>
									<Route path="/cart" element={<Cart />} />
									<Route path="*" element={<NotFound />} />
								</Route>
							</Routes>
						</AnimatePresence>
					</BrowserRouter>
				</ChakraProvider>
			</HelmetProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);
