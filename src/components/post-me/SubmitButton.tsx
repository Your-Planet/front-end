"use client";

import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { useState } from "react";

function SubmitButton() {
	const [open, setOpen] = useState<boolean>(false);

	const checkAuthorIntroduction = () => {
		return true;
	};

	const checkSelectedGenre = () => {
		return true;
	};

	const checkPortfolioLinks = () => {
		const portfolioLinkLength = true;
		return true;
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
