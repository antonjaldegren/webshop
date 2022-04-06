import React from "react";
import { Text, Divider, Stack, Box } from "@chakra-ui/react";

function DataRow({ title, children }) {
	return (
		<Stack>
			<Text
				textTransform="uppercase"
				fontSize="xs"
				fontWeight="bold"
				color="gray.600"
				letterSpacing="wider"
			>
				{title}
			</Text>
			<Divider />
			<Box pl={5}>{children}</Box>
		</Stack>
	);
}

export default DataRow;
