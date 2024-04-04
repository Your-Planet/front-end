"use client";

import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {};

function CompleteView({}: Props) {
	const router = useRouter();

	const handleClick = () => {
		router.push(getIaPath(IA.login));
	};

	return (
		<Box className="flex flex-col justify-between min-h-[230px] max-h-full max-w-[520px] m-auto">
			<Box>
				<Typography className="font-bold" variant="h4">
					회원가입이
					<br />
					완료되었습니다!
				</Typography>
			</Box>
			<Box>
				<Typography color="GrayText" variant="body2">
					환영합니다.
					<br />
					유어플래닛에서 온전히 나의 색에 집중해 보세요.
				</Typography>
			</Box>
			<Button variant="contained" onClick={handleClick} size="large" fullWidth>
				로그인 하러가기
			</Button>
		</Box>
	);
}

export default CompleteView;
