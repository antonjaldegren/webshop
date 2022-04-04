import { useRecoilState, useResetRecoilState } from "recoil";
import { authState } from "../recoil/auth/atom";
import { loginApi, getSingleUser } from "../api";

export default function useAuth() {
	const [{ user, token }, setAuth] = useRecoilState(authState);
	const resetAuth = useResetRecoilState(authState);

	async function login(username, password) {
		const loginData = await loginApi({
			username: username,
			password: password,
		});

		if (!loginData) return "error";

		const userData = await getSingleUser(loginData.userId);
		setAuth({ token: loginData.token, user: userData });
	}

	function logout() {
		resetAuth();
	}

	return {
		user,
		token,
		setAuth,
		login,
		logout,
	};
}
