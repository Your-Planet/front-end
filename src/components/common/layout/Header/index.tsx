"use client";

import Logo from "@/components/common/Logo";
import { AppBar, Grid } from "@mui/material";
import GlobalMenu from "./GlobalMenu";
import Gnb from "./Gnb";

function Header() {
	return (
		<AppBar className="bg-white px-5" position="sticky">
			<Grid className="flex items-center h-20" container>
				<Grid item xs={4}>
					<Gnb />
				</Grid>
				<Grid className="flex justify-center" item xs={4}>
					<Logo href="/" />
				</Grid>
				<Grid className="flex justify-end" item xs={4}>
					<GlobalMenu />
				</Grid>
			</Grid>
		</AppBar>
	);
}

export default Header;
