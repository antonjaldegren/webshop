import { atom } from "recoil";
import { products } from "../../products";

export const productsState = atom({
	key: "productsState",
	default: products,
});
