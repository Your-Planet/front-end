"use client";

import { authorIntroductionContext, filledLinkContext, selectedGenreContext } from "@/recoil/atoms/post_me";
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";

function SubmitButton() {
	const [open, setOpen] = useState<boolean>(false);
	const authorIntroduction = useRecoilValue<string>(authorIntroductionContext);
	const selectedGenre = useRecoilValue<Set<string>>(selectedGenreContext);
	const filledLink = useRecoilValue<Array<string>>(filledLinkContext);

	const handleOpen = () => {
		if (authorIntroduction.length >= 10 && selectedGenre.size >= 3 && filledLink.length >= 2) {
			setOpen(true);
		} else {
			console.log("Not filled");
		}
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
