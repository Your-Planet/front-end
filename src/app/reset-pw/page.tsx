"use client";

import { ResetPasswordRequest } from "@/apis/member/models/reset-pw";
import ResetPasswordView from "@/components/reset-pw";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function ResetPasswordPage({}: Props) {
	const router = useRouter();

	const [resetPasswordForm, setResetPasswordForm] = useState<ResetPasswordRequest | null>(null);

	useEffect(() => {
		const json = sessionStorage.getItem(SESSION_STORAGE.resetPassword) as string;

		if (!json) {
			// TODO: @naeunchan fallback?
			alert("올바르지 않은 접근입니다.");
			router.push("/403");
			return;
		}

		const { name, email, tel } = JSON.parse(json);

		setResetPasswordForm({
			name,
			email,
			tel,
			newPassword: "",
		});
	}, []);

	// TODO: @naeunchan loading?
	return resetPasswordForm && <ResetPasswordView resetPasswordForm={resetPasswordForm} />;
}

export default ResetPasswordPage;
