import { cartState } from "../recoil/cart/atom";
import { useRecoilState } from "recoil";

export default function useCart() {
	const [cart, setCart] = useRecoilState(cartState);

	function addProduct(product, quantity) {
		if (cart.some((item) => item.product.id === product.id)) {
			setCart(
				[...cart].map((item) =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			);
			return;
		}
		setCart([...cart, { product: product, quantity: quantity }]);
	}

	function changeQuantity(product, quantity) {
		setCart(
			[...cart].map((item) =>
				item.product === product
					? { ...item, quantity: quantity }
					: item
			)
		);
	}

	function removeProduct(product) {
		setCart(
			[...cart].filter((item) => (item.product === product ? null : item))
		);
	}

	return { cart, addProduct, changeQuantity, removeProduct };
}
