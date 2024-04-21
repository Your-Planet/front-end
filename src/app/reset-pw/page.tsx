"use client";

import { ResetPasswordRequest } from "@/apis/member/models/reset-pw";
import ResetPasswordView from "@/components/reset-pw";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function ResetPasswordPage({}: Props) {
	const router = useRouter();

	const [resetPasswordForm, setResetPasswordForm] = useState<ResetPasswordRequest>({
		name: "",
		email: "",
		tel: "",
		password: "",
		passwordConfirm: "",
	});

	useEffect(() => {
		const json = sessionStorage.getItem(SESSION_STORAGE.resetPassword) as string;

		if (!json) {
			// how to?
			alert("올바르지 않은 접근입니다.");
			router.push("/403");
			return;
		}

		const { name, email, tel } = JSON.parse(json);

		setResetPasswordForm({
			name,
			email,
			tel,
			password: "",
			passwordConfirm: "",
		});
	}, []);

	return <ResetPasswordView resetPasswordForm={resetPasswordForm} />;
}

export default ResetPasswordPage;
