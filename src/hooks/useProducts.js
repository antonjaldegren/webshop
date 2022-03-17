import { useRecoilValue } from "recoil";
import { productsState } from "../recoil/products/atom";

export default function useProducts() {
	const products = useRecoilValue(productsState);

	const categories = [
		...new Set(products.map((product) => product.category)),
	].sort();

	function getProductById(id) {
		return products.find((product) => product.id === Number(id));
	}

	function getProductsByCategory(category) {
		return products.filter((product) => product.category === category);
	}

	return { products, categories, getProductById, getProductsByCategory };
}
