import { atom } from "recoil";
import { getAllUsers } from "../../api";

function getUsersEffect() {
	return ({ setSelf }) => {
		setSelf(getAllUsers().then((data) => data));
	};
}

export const usersState = atom({
	key: "usersState",
	default: [],
	effects: [getUsersEffect()],
});
