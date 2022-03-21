import { cartState } from "../recoil/cart/atom";
import { useRecoilState, useResetRecoilState } from "recoil";

import useProducts from "./useProducts";

export default function useCart() {
	const [cart, setCart] = useRecoilState(cartState);
	const { getProductById } = useProducts();
	const resetCart = useResetRecoilState(cartState);

	const totalItems = cart.reduce((acc, cur) => acc + cur.quantity, 0);

	const totalPrice = cart.reduce(
		(acc, cur) => acc + getProductById(cur.id).price * cur.quantity,
		0
	);

	function addProduct(id, quantity) {
		if (cart.some((item) => item.id === id)) {
			setCart(
				[...cart].map((item) =>
					item.id === id
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			);
			return;
		}
		setCart([...cart, { id, quantity }]);
	}

	function changeQuantity(id, quantity) {
		const newCart = [...cart].map((item) =>
			item.id === id ? { ...item, quantity } : item
		);

		newCart.length ? setCart(newCart) : resetCart();
	}

	function removeProduct(id) {
		const newCart = [...cart].filter((item) =>
			item.id === id ? null : item
		);

		newCart.length ? setCart(newCart) : resetCart();
	}

	return {
		cart,
		totalItems,
		totalPrice,
		addProduct,
		changeQuantity,
		removeProduct,
		resetCart,
	};
}
