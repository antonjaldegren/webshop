import { atom } from "recoil";
import { getAllProducts } from "../../api";

function getProductsEffect() {
	return ({ setSelf }) => {
		setSelf(getAllProducts().then((data) => data));
	};
}

export const productsState = atom({
	key: "productsState",
	default: [],
	effects: [getProductsEffect()],
});
