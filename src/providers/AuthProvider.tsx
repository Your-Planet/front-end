"use client";

import { ERROR_CODE } from "@/defines/auth/constants";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function AuthProvider() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [open, setOpen] = useState<boolean>(false);
	const [memberType, setMemberType] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");

	useEffect(() => {
		const errorCode = searchParams.get("alert");

		switch (pathname) {
			case "search":
				setMemberType("광고주");
				break;
			case "post-me":
				setMemberType("작가");
				break;
		}

		switch (errorCode) {
			case ERROR_CODE.UNAUTHORIZED:
				setErrorMessage(`${memberType} 계정으로 로그인해주세요!`);
				setOpen(true);
				break;
		}
	}, [pathname, searchParams]);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog className="modal" open={open}>
			<Box className="modal-box">
				<Typography variant="h3" className="font-bold text-lg">
					Warning
				</Typography>
				<Typography className="py-4">{errorMessage}</Typography>
				<Box className="modal-action">
					<form method="dialog">
						<Button className="btn" onClick={handleClose}>
							Close
						</Button>
					</form>
				</Box>
			</Box>
		</Dialog>
	);
}

export default AuthProvider;
