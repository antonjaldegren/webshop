import { useRecoilState } from "recoil";
import { productsState } from "../recoil/products/atom";
import { deleteProduct, updateProduct } from "../api";

export default function useProducts() {
	const [products, setProducts] = useRecoilState(productsState);

	const categories = [
		...new Set(products.map((product) => product.category)),
	].sort();

	function getProductById(id) {
		return products.find((product) => product.id === Number(id));
	}

	function getProductsByCategory(category) {
		return products.filter((product) => product.category === category);
	}

	function removeProduct(id) {
		deleteProduct(id).then((data) => {
			setProducts(products.filter((product) => product.id !== data.id));
		});
	}

	function editProduct(editedProduct) {
		updateProduct(editedProduct).then((data) =>
			setProducts(products.map((product) => product.id))
		);
		// Continue here
	}

	return {
		products,
		categories,
		getProductById,
		getProductsByCategory,
		removeProduct,
		editProduct,
	};
}
