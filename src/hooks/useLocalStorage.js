import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cart/atom";

export function useLocalStorage() {
	const [cart, setCart] = useRecoilState(cartState);

	function saveToLocalStorage(value) {
		const stringifiedValue = JSON.stringify(value);
		window.localStorage.setItem("name", stringifiedValue);
	}

	function loadFromLocalStorage(name) {
		const data = window.localStorage.getItem(name);
		const parsedData = JSON.parse(data);
		return parsedData;
	}

	function clearLocalStorage() {
		window.localStorage.removeItem("myActivities");
		setActivities([]);
	}

	return { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage };
}
