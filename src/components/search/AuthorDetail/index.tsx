"use client";

import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { selectedAuthorState } from "../../../recoil/selectors/search";
import { SelectedAuthorType } from "../defines/types";

function AuthorDetail() {
	const selectedAuthor = useRecoilValue<SelectedAuthorType>(selectedAuthorState);

	return (
		<Box>
			<Box>
				<Typography>{}</Typography>
			</Box>
		</Box>
	);
}

export default AuthorDetail;
