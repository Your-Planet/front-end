import { HeaderTab } from "@/defines/header/index";
import { Box } from "@mui/material";
import { useState } from "react";

type Props = {};

const RightSide = (props: Props) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box aria-label="Header Left Tabs">
			<HeaderTab label="Login" />
			<HeaderTab label="Logout" />
			<HeaderTab label="Register" />
			<HeaderTab label="My Page" />
		</Box>
	);
};

export default RightSide;
