"use client";

import CentralBox from "@/components/common/CentralBox";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import { StyledForm } from "@/components/common/StyledForm/defines/styles";
import H2 from "@/components/common/text/H2";
import { ResetPasswordForm } from "@/defines/forms/reset-pw/types";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import useMutationPostPasswordReset from "@/hooks/queries/member/useMutationPostPasswordReset";
import { getIaPath } from "@/utils/ia";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type Props = {
	resetPasswordForm: ResetPasswordForm;
};

interface ResetPasswordFormInterface extends ResetPasswordForm {}

function ResetPasswordView(props: Props) {
	const { resetPasswordForm } = props;
	const router = useRouter();

	const form = useForm<ResetPasswordFormInterface>({
		defaultValues: {
			...resetPasswordForm,
		},
	});

	const { handleSubmit, watch, setValue } = form;

	const { mutate: mutatePostResetPassword } = useMutationPostPasswordReset({});

	const handleClickSubmitButton = () => {
		setValue("name", resetPasswordForm.name);
		setValue("email", resetPasswordForm.email);
		setValue("tel", resetPasswordForm.tel);
	};

	const handleFormSubmit = handleSubmit((data) => {
		mutatePostResetPassword(data, {
			onSuccess({ data }) {
				sessionStorage.removeItem(SESSION_STORAGE.resetPassword);
				router.push(getIaPath(IA.find.pw.complete));
			},
			onError({ response }) {
				alert(response?.data.message);
			},
		});
	});

	const [password, passwordConfirm] = watch(["password", "passwordConfirm"]);

	return (
		<CentralBox>
			<H2>비밀번호 재설정</H2>

			<FormProvider {...form}>
				<StyledForm onSubmit={handleFormSubmit} noValidate>
					<PasswordTextField />

					<Button
						fullWidth
						variant="contained"
						size="large"
						type="submit"
						onClick={handleClickSubmitButton}
						disabled={!(password && passwordConfirm)}
					>
						다음
					</Button>
				</StyledForm>
			</FormProvider>
		</CentralBox>
	);
}

export default ResetPasswordView;
