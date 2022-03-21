import { atom } from "recoil";

function localStorageEffect(key) {
	return ({ setSelf, onSet }) => {
		const savedValue = localStorage.getItem(key);
		if (savedValue) setSelf(JSON.parse(savedValue));

		onSet((newValue, _, isReset) =>
			isReset
				? localStorage.removeItem(key)
				: localStorage.setItem(key, JSON.stringify(newValue))
		);
	};
}

export const cartState = atom({
	key: "cartState",
	default: [],
	effects: [localStorageEffect("cart")],
});
