import { useRecoilValue } from "recoil";
import { usersState } from "../recoil/users/atom";
import { addNewUser, updateUser } from "../api";
import useAuth from "./useAuth";

export default function useUsers() {
	const users = useRecoilValue(usersState);
	const { user, token, setAuth } = useAuth();

	function getUserById(id) {
		return users.find((user) => user.id === Number(id));
	}

	async function registerUser(userObj) {
		const userData = await addNewUser(userObj);
		if (userData.status === "error") return "error";
		return userData;
	}

	async function editUser(newUserObj) {
		const data = await updateUser(user.id, newUserObj);
		if (!data) return "error";
		setAuth({ token: token, user: data });
	}

	return {
		users,
		getUserById,
		registerUser,
		editUser,
	};
}
