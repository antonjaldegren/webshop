import { useRecoilValue } from "recoil";
import { productsState } from "../recoil/products/atom";

export default function useGetProduct(id) {
	const products = useRecoilValue(productsState);
	return products.find((product) => product.id === Number(id));
}
