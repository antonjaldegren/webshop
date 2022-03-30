import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";
import {
	getAllProducts,
	getSingleProduct,
	deleteProduct,
	updateProduct,
	getAllCarts,
	getUserCart,
	getAllUsers,
	addNewUser,
	getSingleUser,
	login,
} from "./api";

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

	useEffect(() => {
		// getAllProducts();
		// getSingleProduct(2);
		// deleteProduct(2);
		// getAllCarts().then((data) => console.log(data));
		// getUserCart(1).then((data) => console.log(data));
		// getAllUsers();
		// getSingleUser(7);
		// login({
		// 	username: "mor_2314",
		// 	password: "83r5^_",
		// });
		// addNewUser({
		// 	email: "John@gmail.com",
		// 	username: "johnd",
		// 	password: "m38rmF$",
		// 	role: "user",
		// 	name: {
		// 		firstname: "John",
		// 		lastname: "Doe",
		// 	},
		// 	address: {
		// 		city: "kilcoole",
		// 		street: "7835 new road",
		// 		number: 3,
		// 		zipcode: "12926-3874",
		// 	},
		// 	phone: "1-570-236-7033",
		// }).then((data) => console.log(data));
		// updateProduct(4, {
		// 	title: "test product",
		// 	price: 13.5,
		// 	description: "lorem ipsum set",
		// 	image: "https://i.pravatar.cc",
		// 	category: "electronic",
		// });
	}, []);

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
