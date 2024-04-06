"use client";

import useOpen from "@/hooks/common/useOpen";
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";

function SubmitButton() {
	const { opened, handleOpen, handleClose } = useOpen(false);

	return (
		<Box className="flex flex-col w-[50vw] pt-5">
			<Button className="my-2" type="submit" fullWidth variant="contained" onClick={handleOpen}>
				등록하기
			</Button>
			<Dialog open={opened} onClose={handleClose}>
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