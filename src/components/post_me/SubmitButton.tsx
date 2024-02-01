"use client";

import { AUTHOR_INTRODUCTION_LENGTH, PORTFOLIO_LINK_LIMIT, SELECTED_GENRE_LIMIT } from "@/defines/post_me/constants";
import { authorIntroductionState, filledLinkState, selectedGenreState } from "@/recoil/selectors/post_me";
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";

function SubmitButton() {
	const [open, setOpen] = useState<boolean>(false);
	const authorIntroduction = useRecoilValue<string>(authorIntroductionState);
	const selectedGenre = useRecoilValue<Set<string>>(selectedGenreState);
	const filledLink = useRecoilValue<Array<string>>(filledLinkState);

	const checkAuthorIntroduction = () => {
		return (
			AUTHOR_INTRODUCTION_LENGTH.min <= authorIntroduction.length &&
			authorIntroduction.length <= AUTHOR_INTRODUCTION_LENGTH.max
		);
	};

	const checkSelectedGenre = () => {
		return SELECTED_GENRE_LIMIT.min <= selectedGenre.size && selectedGenre.size <= SELECTED_GENRE_LIMIT.max;
	};

	const checkPortfolioLinks = () => {
		const portfolioLinkLength = filledLink.filter((link) => link.length >= 1).length;
		return PORTFOLIO_LINK_LIMIT.min <= portfolioLinkLength && portfolioLinkLength <= PORTFOLIO_LINK_LIMIT.max;
	};

	const handleOpen = () => {
		setOpen(checkAuthorIntroduction() && checkSelectedGenre() && checkPortfolioLinks());
	};

	const handleClose = () => setOpen(false);

	return (
		<Box className="flex flex-col w-[50vw]">
			<Button className="my-2" type="submit" fullWidth variant="contained" onClick={handleOpen}>
				등록하기
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent dividers>
					<Typography gutterBottom id="modal-title" variant="body1" component="h2">
						포트폴리오를 등록하시겠습니까?
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" color="error" onClick={handleClose} className="mr-1">
						<span>취소</span>
					</Button>
					<Button variant="contained" color="primary" onClick={handleClose} className="mr-1">
						<span>확인</span>
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

export default SubmitButton;
