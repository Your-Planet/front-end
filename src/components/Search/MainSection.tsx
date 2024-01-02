import { Box, Grid } from "@mui/material";
import React from "react";
import AuthorCard from "./AuthorCard";

type Props = {};

function MainSection(props: Props) {
	return (
		<Grid className="py-10" container spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={4}>
				<AuthorCard authorName="망그러진곰" profilePictureUrl="" instagramId="yurang_official" />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard authorName="망그러진곰" profilePictureUrl="" instagramId="yurang_official" />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard authorName="망그러진곰" profilePictureUrl="" instagramId="yurang_official" />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard authorName="망그러진곰" profilePictureUrl="" instagramId="yurang_official" />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard authorName="망그러진곰" profilePictureUrl="" instagramId="yurang_official" />
			</Grid>
			<Grid item xs={4}>
				<AuthorCard authorName="망그러진곰" profilePictureUrl="" instagramId="yurang_official" />
			</Grid>
		</Grid>
	);
}

export default MainSection;
