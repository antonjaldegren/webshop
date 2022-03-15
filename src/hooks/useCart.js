import { cartState } from "../recoil/cart/atom";
import { useRecoilState } from "recoil";

export default function useCart() {
	const [cart, setCart] = useRecoilState(cartState);

	function addProduct(product, amount) {
		if (cart.some((item) => item.product.id === product.id)) {
			setCart(
				[...cart].map((item) =>
					item.product.id === product.id
						? { ...item, amount: item.amount + amount }
						: item
				)
			);
			return;
		}
		setCart([...cart, { product: product, amount: amount }]);
	}

	function changeAmount(product, amount) {
		setCart(
			[...cart].map((item) =>
				item.product === product ? { ...item, amount: amount } : item
			)
		);
	}

	function removeProduct(product) {
		setCart(
			[...cart].filter((item) => (item.product === product ? null : item))
		);
	}

	return { cart, addProduct, changeAmount, removeProduct };
}
