"use client";

import React from "react";
import { Grid, AppBar } from "@mui/material";
import Gnb from "./Gnb";
import Logo from "./Logo";
import GlobalMenu from "./GlobalMenu";

function Header() {
	return (
		<AppBar className="bg-white px-5" position="fixed">
			<Grid className="flex items-center h-20" container>
				<Grid item xs={4}>
					<Gnb />
				</Grid>
				<Grid className="flex justify-center" item xs={4}>
					<Logo />
				</Grid>
				<Grid className="flex justify-end" item xs={4}>
					<GlobalMenu />
				</Grid>
			</Grid>
		</AppBar>
	);
}

export default Header;
