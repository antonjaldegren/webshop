import React from "react";
import { Stack, Heading, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductPreview({ data }) {
	return (
		<Stack
			padding="1em"
			justifyContent="space-between"
			boxShadow="md"
			spacing={5}
		>
			<Image
				src={data.image}
				alt={data.title}
				boxSize="100%"
				objectFit="contain"
			/>
			<Heading as="h2" size="sm">
				{data.title}
			</Heading>
			<Text>${data.price}</Text>
			<Button as={Link} to={`/products/${data.id}`} flexShrink={0}>
				Details
			</Button>
		</Stack>
	);
}

export default ProductPreview;
