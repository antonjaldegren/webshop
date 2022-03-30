import React from "react";
import { Text } from "@chakra-ui/react";
import AnimatedPage from "../components/AnimatedPage";

function NotFound() {
	return (
		<AnimatedPage>
			<Text fontSize="lg" paddingY={4}>
				Page not found!
			</Text>
		</AnimatedPage>
	);
}

export default NotFound;
