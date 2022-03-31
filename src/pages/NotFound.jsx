import React from "react";
import { Helmet } from "react-helmet-async";
import { Alert, AlertIcon } from "@chakra-ui/react";
import AnimatedPage from "../components/AnimatedPage";

function NotFound() {
	return (
		<AnimatedPage>
			<Helmet>
				<title>Webshop | Not found</title>
			</Helmet>
			<Alert status="error" variant="left-accent" fontSize="lg">
				<AlertIcon />
				Page not found!
			</Alert>
		</AnimatedPage>
	);
}

export default NotFound;
