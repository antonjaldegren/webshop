import React, { useState, useRef } from "react";
import {
	FormLabel,
	Input,
	InputRightElement,
	InputGroup,
	Box,
} from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

function PasswordInput({ title, isInvalid, id, value, onChange, children }) {
	const [show, setShow] = useState(false);

	return (
		<Box>
			<FormLabel htmlFor={id}>{title}</FormLabel>
			<InputGroup>
				<Input
					id={id}
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
		</Box>
	);
}

export default PasswordInput;
