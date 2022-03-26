import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Center } from "@chakra-ui/react";

import Header from "./components/Header";
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

function App() {
	useEffect(() => {
		// getAllProducts();
		// getSingleProduct(2);
		// deleteProduct(2);
		// getAllCarts();
		// getUserCart(6);
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
		// });
		// updateProduct(4, {
		// 	title: "test product",
		// 	price: 13.5,
		// 	description: "lorem ipsum set",
		// 	image: "https://i.pravatar.cc",
		// 	category: "electronic",
		// });
	}, []);

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
