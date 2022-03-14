import React from "react";
import { Stack, Heading, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductPreview({ data }) {
	return (
		<Stack
			border="1px solid grey"
			padding="1em"
			justifyContent="space-between"
		>
			<Image src={data.image} />
			<Heading as="h2" size="sm">
				{data.title}
			</Heading>
			<Button as={Link} to={`/products/${data.id}`}>
				Details
			</Button>
		</Stack>
	);
}

export default ProductPreview;
