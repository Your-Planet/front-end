import { Box, Grid } from "@mui/material";
import React from "react";
import AuthorCard from "./AuthorCard";

type Props = {};

const MainSection = (props: Props) => {
	return (
		<Grid className="py-10" container spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={4}>
				<AuthorCard />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard />
			</Grid>
		</Grid>
	);
};

export default MainSection;
