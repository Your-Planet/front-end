import ReactHookForm from "@/components/common/ReactHookForm";
import { LoginForm } from "@/components/login/LoginView/defines/types";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import useMutationPostLogin from "@/hooks/queries/member/useMutationPostLogin";
import { getCookie, removeCookie, setCookie } from "@/utils/cookie";
import { getIaPath } from "@/utils/ia";
import { isEmail } from "@/utils/string";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AccountManagementPanel from "./components/AccountManagementPanel";

export interface LoginViewProps {}

interface LoginFormInterface extends LoginForm {
	isRemember: boolean;
}

function LoginView(props: LoginViewProps) {
	const {} = props;

	const router = useRouter();

	const form = useForm<LoginFormInterface>({
		defaultValues: {
			email: "",
			password: "",
			isRemember: false,
		},
	});

	const { handleSubmit, setValue } = form;

	const { mutate: mutatePostLogin } = useMutationPostLogin({});

	const handleFormSubmit = handleSubmit((data) => {
		mutatePostLogin(data, {
			onSuccess({ data: token }) {
				setCookie(COOKIE.accessToken, token);

				if (data.isRemember) {
					setCookie(COOKIE.rememberUserEmail, data.email, COOKIE.maxAge);
				} else {
					removeCookie(COOKIE.rememberUserEmail);
				}

				router.push(getIaPath(IA));
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

	useEffect(() => {
		const storedEmail = getCookie(COOKIE.rememberUserEmail);

		if (storedEmail) {
			setValue("email", storedEmail);
			setValue("isRemember", true);
		}
	}, []);

	return (
		<Box className="m-auto p-8">
			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit} className="mt-12" noValidate>
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
					{/*<Checkbox formName="isRemember" checkbox={checkbox} onChange={handleCheckboxChange} />*/}
					<Checkbox formName="isRemember" label={"이메일 기억하기"} />
					<Button fullWidth variant="contained" size="large" type="submit">
						로그인
					</Button>
				</form>
			</FormProvider>
			<AccountManagementPanel />
		</Box>
	);
}

export default LoginView;
