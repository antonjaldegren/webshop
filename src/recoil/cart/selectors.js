import { selector } from "recoil";
import { cartState } from "./atom";

export const getCartTotal = selector({
	key: "getCartTotal",
	get: ({ get }) => {
		const cart = get(cartState);

		const totalItems = cart.reduce((acc, cur) => acc + cur.amount, 0);

		const totalPrice = cart.reduce(
			(acc, cur) => acc + cur.product.price * cur.amount,
			0
		);

		return { totalItems, totalPrice };
	},
});
