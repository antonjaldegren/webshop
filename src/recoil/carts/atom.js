import { atom } from "recoil";
import { getAllCarts } from "../../api";

function getCartsEffect() {
	return ({ setSelf }) => {
		getAllCarts().then((data) => setSelf(data));
	};
}

export const cartsState = atom({
	key: "usersState",
	default: [],
	effects: [getCartsEffect()],
});
