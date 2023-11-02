"use client";

import { HeaderBox } from "@/defines/header/index";
import { Box } from "@mui/material";
import Center from "./Center";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Header = () => {
	return (
		<>
			<Box className="w-full">
				<HeaderBox>
					<LeftSide />
					<Center />
					<RightSide />
				</HeaderBox>
			</Box>
		</>
	);
};

export default Header;
