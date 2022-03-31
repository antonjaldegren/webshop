import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";

import Header from "./components/Header";
import AnimatedPage from "./components/AnimatedPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { useRecoilValue } from "recoil";
import { authState } from "./recoil/auth/atom";

function App() {
	const auth = useRecoilValue(authState);

	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				<Header />
				<Container
					paddingX={4}
					paddingY="5em"
					maxW="container.xl"
					minH="100vh"
				>
					<AnimatedPage>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/products/:id" element={<Product />} />
							<Route path="/cart" element={<Cart />} />
							{auth.token ? (
								<Route path="/profile" element={<Profile />} />
							) : (
								<>
									<Route path="/login" element={<Login />} />
									<Route
										path="/register"
										element={<Register />}
									/>
								</>
							)}
							{auth.user.role === "admin" && (
								<Route path="/admin" element={<Admin />} />
							)}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</AnimatedPage>
				</Container>
				<Center as="footer" bg="gray.100" paddingY={14}>
					Footer
				</Center>
			</Suspense>
		</>
	);
}

export default App;
