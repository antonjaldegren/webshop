import React from "react";
import { Helmet } from "react-helmet-async";
import {
	Accordion,
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
			<Stack spacing={4}>
				<Heading>Admin</Heading>
				{/* <Accordion allowToggle>
				</Accordion> */}
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
		</AnimatedPage>
	);
}

export default Admin;
