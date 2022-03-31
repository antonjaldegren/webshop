import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Tag } from "@chakra-ui/react";

function CategoryLink({ category, children }) {
	const [isActive, setIsActive] = useState(false);
	const [searchParams] = useSearchParams();

	useEffect(
		() => setIsActive(searchParams.get("category") === category),
		[searchParams]
	);

	return (
		<Tag
			fontSize="xs"
			fontWeight={isActive ? "bold" : "normal"}
			color={isActive ? "black" : "gray.400"}
		>
			<Link to={`/products/?category=${category}`}>{children}</Link>
		</Tag>
	);
}

export default CategoryLink;
