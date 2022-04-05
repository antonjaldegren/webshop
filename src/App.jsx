import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import SkeletonPage from "./components/SkeletonPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
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
				paddingY="6em"
				maxW="container.xl"
				minH="100vh"
			>
				<Suspense fallback={<SkeletonPage />}>
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
			<Footer />
		</>
	);
}

export default App;
