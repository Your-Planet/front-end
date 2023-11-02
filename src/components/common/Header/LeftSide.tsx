import { Tabs } from "@mui/material";
import { useState } from "react";
import { HeaderTab } from "@/defines/header/index";

type Props = {};

const LeftSide = (props: Props) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Tabs className="flex items-center h-20" value={value} onChange={handleChange} aria-label="Header Left Tabs">
			<HeaderTab label="Home" />
			<HeaderTab label="Our Work" />
			<HeaderTab label="Our Team" />
			<HeaderTab label="Search" />
			<HeaderTab label="Post ME" />
		</Tabs>
	);
};

export default LeftSide;
