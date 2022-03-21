import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const pageMotion = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 1 } },
	exit: { opacity: 0, transition: { duration: 1 } },
};

function AnimatedPage({ children }) {
	return (
		<Box
			as={motion.div}
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageMotion}
		>
			{children}
		</Box>
	);
}

export default AnimatedPage;
