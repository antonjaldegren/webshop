import React, { useState, useEffect } from "react";
import { Accordion } from "@chakra-ui/react";
import AdminUser from "./AdminUser";
import useUsers from "../../hooks/useUsers";
import SearchField from "./SearchField";

function AdminUsers() {
	const { users } = useUsers();
	const [input, setInput] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);

	useEffect(
		() =>
			setFilteredUsers(
				users.filter((user) =>
					user.username.toLowerCase().includes(input.toLowerCase())
				)
			),
		[input]
	);

	return (
		<>
			<SearchField value={input} onChange={setInput} />
			<Accordion allowToggle>
				{filteredUsers.map((user) => (
					<AdminUser key={user.id} user={user} />
				))}
			</Accordion>
		</>
	);
}

export default AdminUsers;
