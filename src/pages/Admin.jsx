import React from "react";
import { Helmet } from "react-helmet-async";
import { Accordion, Heading } from "@chakra-ui/react";
import AdminProducts from "../components/AdminProducts";
import AdminCarts from "../components/AdminCarts";
import AdminUsers from "../components/AdminUsers";
import AnimatedPage from "../components/AnimatedPage";

function Admin() {
	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | Admin</title>
			</Helmet>
			<Heading>Admin</Heading>
			<Accordion allowToggle>
				<AdminProducts />
				<AdminCarts />
				<AdminUsers />
			</Accordion>
		</AnimatedPage>
	);
}

export default Admin;
