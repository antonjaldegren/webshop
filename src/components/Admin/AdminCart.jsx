import React, { useMemo } from "react";
import useUsers from "../../hooks/useUsers";

function AdminCart({ cart }) {
	const { getUserById } = useUsers();
	const user = useMemo(() => getUserById(cart.userId), [cart]);

	// TODO: Finish when backend is fixed to return valid user id's

	// console.log(user);
	// console.log(cart);

	return (
		<div>
			{cart.id}
			{/* <div>{user.username}</div> */}
		</div>
	);
}

export default AdminCart;
