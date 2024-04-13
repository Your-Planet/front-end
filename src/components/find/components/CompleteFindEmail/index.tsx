"use client";

import H2 from "@/components/common/text/H2";
import {
	inputProps,
	StyledBackButton,
	StyledButton,
	StyledEmailBox,
	StyledInput,
} from "@/components/find/components/CompleteFindEmail/defines/styles";
import { foundEmail } from "@/components/find/defines/constants";
import { StyledBox } from "@/components/find/defines/styles";
import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function CompleteFindEmail({}: Props) {
	const [email, setEmail] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		// @TODO: 나은찬 세션 만료 시간 필요
		// if email is null, complete view 접근 금지
		setEmail(sessionStorage.getItem(foundEmail));
	}, []);

	const handleClickBackButton = () => {
		sessionStorage.removeItem(foundEmail);
		router.push(getIaPath(IA.find.pw));
	};

	const handleClickLoginButton = () => {
		sessionStorage.removeItem(foundEmail);
		router.push(getIaPath(IA.login));
	};

	return (
		<StyledBox>
			<H2>고객님의 이메일 정보입니다.</H2>

			<Box className="complete-find-email-box">
				<StyledEmailBox>
					<StyledInput readOnly disableUnderline fullWidth value={email} inputProps={{ ...inputProps }} />
				</StyledEmailBox>

				<StyledBackButton variant="contained" size="large" onClick={handleClickBackButton}>
					비밀번호 찾기
				</StyledBackButton>
				<StyledButton variant="contained" size="large" onClick={handleClickLoginButton}>
					로그인 화면으로 돌아가기
				</StyledButton>
			</Box>
		</StyledBox>
	);
}

export default CompleteFindEmail;
