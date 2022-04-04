import React, { useState } from "react";
import {
	FormLabel,
	Input,
	InputRightElement,
	InputGroup,
	FormControl,
} from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

function PasswordInput({
	title,
	isInvalid,
	isRequired,
	value,
	onChange,
	children,
}) {
	const [show, setShow] = useState(false);

	return (
		<FormControl isRequired={isRequired}>
			<FormLabel>{title}</FormLabel>
			<InputGroup>
				<Input
					isInvalid={isInvalid}
					type={show ? "text" : "password"}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
				<InputRightElement
					cursor="pointer"
					onClick={() => setShow(!show)}
				>
					{show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
				</InputRightElement>
			</InputGroup>
			{children}
		</FormControl>
	);
}

export default PasswordInput;
