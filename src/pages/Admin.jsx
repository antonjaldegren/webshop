import React from "react";
import { Helmet } from "react-helmet-async";
import {
	Center,
	Heading,
	Button,
	Stack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import AdminProducts from "../components/Admin/AdminProducts";
import AdminCarts from "../components/Admin/AdminCarts";
import AdminUsers from "../components/Admin/AdminUsers";
import AnimatedPage from "../components/AnimatedPage";

function Admin() {
	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | ADMIN</title>
			</Helmet>
			<Center>
				<Stack spacing={4} maxW="container.lg" width="100%">
					<Heading>Admin</Heading>
					<Tabs>
						<TabList>
							{["Products", "Users", "Carts"].map((tabTitle) => (
								<Tab key={tabTitle}>
									<Button variant="ghost">{tabTitle}</Button>
								</Tab>
							))}
						</TabList>
						<TabPanels>
							<TabPanel>
								<AdminProducts />
							</TabPanel>
							<TabPanel>
								<AdminUsers />
							</TabPanel>
							<TabPanel>
								<AdminCarts />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Stack>
			</Center>
		</AnimatedPage>
	);
}

export default Admin;
