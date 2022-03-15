import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const pageMotion = {
	initial: { opacity: 0, x: -30 },
	animate: { opacity: 1, x: 0, transition: { duration: 1 } },
	exit: { opacity: 0, x: -30, transition: { duration: 1 } },
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