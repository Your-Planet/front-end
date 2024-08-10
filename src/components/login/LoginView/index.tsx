import ReactHookForm from "@/components/common/ReactHookForm";
import AccountManagementPanel from "@/components/login/LoginView/components/AccountManagementPanel";
import { LoginForm } from "@/components/login/LoginView/defines/types";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { TIME_UNIT } from "@/defines/time/constants";
import useOpen from "@/hooks/common/useOpen";
import useMutationPostLogin from "@/hooks/queries/auth/useMutationPostLogin";
import { getCookie, removeCookie, setCookie } from "@/utils/cookie";
import { getIaPath } from "@/utils/ia";
import { isEmail } from "@/utils/string";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, Stack } from "@mui/material";
import { JwtPayload, decode } from "jsonwebtoken";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface LoginFormInterface extends LoginForm {
	isRemember: boolean;
}

function LoginView() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const form = useForm<LoginFormInterface>({
		defaultValues: {
			email: "",
			password: "",
			isRemember: false,
		},
	});

	const { opened: hasAlert, handleOpen: handleOpenAlert, handleClose: handleCloseAlert } = useOpen();

	const [serverErrorMessage, setServerErrorMessage] = useState<string>();

	const { handleSubmit, setValue } = form;

	const { mutate: mutatePostLogin, isPending } = useMutationPostLogin({});

	const handleFormSubmit = handleSubmit(({ isRemember, ...data }) => {
		mutatePostLogin(data, {
			onSuccess({ data: token }) {
				const { exp } = decode(token) as JwtPayload;

				if (exp) {
					setCookie(COOKIE.accessToken, token, {
						expires: new Date(exp * TIME_UNIT.unitOfMs.asSecond),
					});
				}

				if (isRemember) {
					setCookie(COOKIE.rememberUserEmail, data.email, {
						atExpires: TIME_UNIT.unitOfSecond.asDay * 30,
					});
				} else {
					removeCookie(COOKIE.rememberUserEmail);
				}

				const redirectPageUrlOnLoginSuccess = searchParams.get("redirect") ?? getIaPath(IA);
				router.push(redirectPageUrlOnLoginSuccess);
			},
			onError(error) {
				setServerErrorMessage(error?.response?.data.message);
				handleOpenAlert();
			},
		});
	});

	const validateEmail = (value: string) => {
		if (!value) return "이메일을 입력해 주세요.";
		if (!isEmail(value)) return "이메일 형식에 맞게 입력해 주세요.";
		return true;
	};

	const validatePassword = (value: string) => {
		if (!value) return "비밀번호를 입력해 주세요.";
		return true;
	};

	const { TextField, Checkbox } = ReactHookForm<LoginFormInterface>();

	// TODO @김현규 서버사이드에서 불러오기
	useEffect(() => {
		const storedEmail = getCookie(COOKIE.rememberUserEmail);

		if (storedEmail) {
			setValue("email", storedEmail);
			setValue("isRemember", true);
		}
	}, []);

	return (
		<Box className="m-auto p-8">
			<Stack spacing={"32px"} position={"relative"}>
				<FormProvider {...form}>
					<form onSubmit={handleFormSubmit} noValidate>
						<TextField
							formName="email"
							label="이메일"
							type="email"
							fullWidth
							rules={{
								validate: validateEmail,
							}}
						/>
						<TextField
							formName="password"
							label="비밀번호"
							type="password"
							fullWidth
							margin="normal"
							rules={{
								validate: validatePassword,
							}}
						/>
						<Checkbox formName="isRemember" label={"이메일 기억하기"} />
						<LoadingButton fullWidth variant="contained" size="large" type="submit" loading={isPending}>
							로그인
						</LoadingButton>
					</form>
				</FormProvider>

				<AccountManagementPanel />

				<Box position={"absolute"} top={"100%"} width={"100%"}>
					{hasAlert && (
						<Alert severity={"error"} onClose={handleCloseAlert}>
							{serverErrorMessage}
						</Alert>
					)}
				</Box>
			</Stack>
		</Box>
	);
}

export default LoginView;
