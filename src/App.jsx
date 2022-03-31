import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";

import Header from "./components/Header/Header";
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
import useAuth from "./hooks/useAuth";

function App() {
	const { user, token } = useAuth();

	return (
		<>
			<Header />
			<Container
				paddingX={4}
				paddingY="5em"
				maxW="container.xl"
				minH="100vh"
			>
				<Suspense fallback={<p>Loading...</p>}>
					<AnimatedPage>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<Products />} />
							<Route path="/products/:id" element={<Product />} />
							<Route path="/cart" element={<Cart />} />
							{token ? (
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
							{user.role === "admin" && (
								<Route path="/admin" element={<Admin />} />
							)}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</AnimatedPage>
				</Suspense>
			</Container>
			<Center as="footer" bg="gray.100" paddingY={14}>
				Footer
			</Center>
		</>
	);
}

export default App;
