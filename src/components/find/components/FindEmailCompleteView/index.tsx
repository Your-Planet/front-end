"use client";

import CentralBox from "@/components/common/CentralBox";
import H2 from "@/components/common/text/H2";
import { StyledButtonBoxInFind, StyledFormInFind } from "@/components/find/components/defines/styles";
import {
	EmailInputProps,
	StyledEmailBox,
	StyledEmailInput,
} from "@/components/find/components/FindEmailCompleteView/defines/styles";

import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import { getIaPath } from "@/utils/ia";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function FindEmailCompleteView({}: Props) {
	const [email, setEmail] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		// @TODO: 나은찬 세션 만료 시간 필요
		// if email is null, complete view 접근 금지
		setEmail(sessionStorage.getItem(SESSION_STORAGE.foundEmail));
	}, []);

	const handleClickFindPasswordButton = () => {
		sessionStorage.removeItem(SESSION_STORAGE.foundEmail);
		router.push(getIaPath(IA.find.pw));
	};

	const handleClickLoginButton = () => {
		sessionStorage.removeItem(SESSION_STORAGE.foundEmail);
		router.push(getIaPath(IA.login));
	};

	return (
		<CentralBox>
			<H2>고객님의 이메일 정보입니다.</H2>

			<StyledFormInFind>
				<StyledEmailBox>
					<StyledEmailInput readOnly disableUnderline fullWidth value={email} inputProps={{ ...EmailInputProps }} />
				</StyledEmailBox>

				<StyledButtonBoxInFind>
					<Button variant="contained" size="large" onClick={handleClickFindPasswordButton}>
						비밀번호 찾기
					</Button>
					<Button variant="outlined" size="large" onClick={handleClickLoginButton}>
						로그인 화면으로 돌아가기
					</Button>
				</StyledButtonBoxInFind>
			</StyledFormInFind>
		</CentralBox>
	);
}

export default FindEmailCompleteView;
