import React from "react";
import { Helmet } from "react-helmet-async";
import { Accordion, Heading } from "@chakra-ui/react";
import AdminProducts from "../components/Admin/AdminProducts";
import AdminCarts from "../components/Admin/AdminCarts";
import AdminUsers from "../components/Admin/AdminUsers";
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
				<AdminUsers />
				<AdminCarts />
			</Accordion>
		</AnimatedPage>
	);
}

export default Admin;
