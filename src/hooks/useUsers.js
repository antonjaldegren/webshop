import { useRecoilValue } from "recoil";
import { usersState } from "../recoil/users/atom";

export default function useUsers() {
	const users = useRecoilValue(usersState);

	function getUserById(id) {
		return users.find((user) => user.id === Number(id));
	}

	return {
		users,
		getUserById,
	};
}
