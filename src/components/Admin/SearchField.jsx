import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchField({ value, onChange }) {
	return (
		<InputGroup mb={3} maxWidth="300px">
			<InputLeftElement
				pointerEvents="none"
				color="gray.300"
				children={<BsSearch />}
			/>
			<Input
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
		</InputGroup>
	);
}

export default SearchField;
