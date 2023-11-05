"use client";

import React from "react";
import LeftSide from "./LeftSide";
import Logo from "./Logo";
import RightSide from "./RightSide";
import { Grid, AppBar } from "@mui/material";

const Header: React.FC = () => {
	return (
		<AppBar className="bg-white px-5" position="fixed">
			<Grid className="flex items-center" container>
				<Grid item xs={4}>
					<LeftSide />
				</Grid>
				<Grid className="flex justify-center" item xs={4}>
					<Logo />
				</Grid>
				<Grid className="flex justify-end" item xs={4}>
					<RightSide />
				</Grid>
			</Grid>
		</AppBar>
	);
};

export default Header;
