import { cartState } from "../recoil/cart/atom";
import { useRecoilState, useResetRecoilState } from "recoil";

export default function useCart() {
	const [cart, setCart] = useRecoilState(cartState);
	const resetCart = useResetRecoilState(cartState);

	function addProduct(product, quantity) {
		if (cart.some((item) => item.product === product)) {
			setCart(
				[...cart].map((item) =>
					item.product === product
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			);
			return;
		}
		setCart([...cart, { product, quantity }]);
	}

	function changeQuantity(product, quantity) {
		const newCart = [...cart].map((item) =>
			item.product === product ? { ...item, quantity } : item
		);

		newCart.length ? setCart(newCart) : resetCart();
	}

	function removeProduct(product) {
		const newCart = [...cart].filter((item) =>
			item.product === product ? null : item
		);

		newCart.length ? setCart(newCart) : resetCart();
	}

	return {
		cart,
		addProduct,
		changeQuantity,
		removeProduct,
		resetCart,
	};
}
