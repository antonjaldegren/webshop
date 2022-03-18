import { cartPopoverState } from "../recoil/cartPopover/atom";
import { useRecoilState } from "recoil";

export default function useCartPopover() {
	const [isOpen, setIsOpen] = useRecoilState(cartPopoverState);

	function openCartPopover() {
		setIsOpen(true);
	}

	function closeCartPopover() {
		setIsOpen(false);
	}

	return { isOpen, closeCartPopover, openCartPopover };
}
