import React from "react";
import { Text } from "@chakra-ui/react";

function InputError({ children }) {
	return (
		<Text fontSize="sm" color="red.500" padding={1}>
			{children}
		</Text>
	);
}

export default InputError;
