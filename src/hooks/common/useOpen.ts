import { useState } from "react";

export interface UseOpen {
	opened: boolean;
	handleOpen: () => void;
	handleClose: () => void;
	handleToggle: () => void;
}

function useOpen(defaultOpened = false): UseOpen {
	const [opened, setOpened] = useState(defaultOpened);

	const handleOpen = () => setOpened(true);

	const handleClose = () => setOpened(false);

	const handleToggle = () => setOpened((prev) => !prev);

	return {
		opened,
		handleOpen,
		handleClose,
		handleToggle,
	};
}

export default useOpen;
