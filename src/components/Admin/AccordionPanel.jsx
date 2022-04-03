import React from "react";
import { AccordionPanel as AccPan } from "@chakra-ui/react";

function AccordionPanel({ children }) {
	return (
		<AccPan borderLeft="10px solid" borderColor="gray.200">
			{children}
		</AccPan>
	);
}

export default AccordionPanel;
