"use client";

import React from "react";
import Gnb from "./Gnb";
import GlobalMenu from "./GlobalMenu";
import { Grid, AppBar } from "@mui/material";
import Logo from "@/components/common/Logo";

const Header: React.FC = () => {
	return (
		<AppBar className="bg-white px-5" position="fixed">
			<Grid className="flex items-center h-20" container>
				<Grid item xs={4}>
					<Gnb />
				</Grid>
				<Grid className="flex justify-center" item xs={4}>
					<Logo href={"/"} />
				</Grid>
				<Grid className="flex justify-end" item xs={4}>
					<GlobalMenu />
				</Grid>
			</Grid>
		</AppBar>
	);
};

export default Header;
