import ReactHookForm from "@/components/common/ReactHookForm";
import { LoginForm } from "@/components/login/LoginView/defines/types";
import useLoginViewRedirect from "@/components/login/LoginView/hooks/useLoginViewRedirect";
import { COOKIE } from "@/defines/cookie/constants";
import useMutationPostLogin from "@/hooks/queries/member/useMutationPostLogin";
import { removeCookie, setCookie } from "@/utils/cookie";
import { isEmail } from "@/utils/string";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getCookie } from "../../../utils/cookie";
import AccountManagementPanel from "./components/AccountManagementPanel";
import { ACCOUNT_COOKIE } from "./defines/cookie/constants";

export interface LoginViewProps {}

function LoginView(props: LoginViewProps) {
	const {} = props;

	const router = useRouter();

	useLoginViewRedirect();

	const form = useForm<LoginForm>({
		defaultValues: {
			email: "",
			password: "",
			isRemember: false,
		},
	});

	// Remember email
	const [isRemember, setIsRemember] = useState<boolean>(false);
	const rememberUserEmail = getCookie(ACCOUNT_COOKIE.rememberUserEmail);
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsRemember(event.target.checked);

		if (event.target.checked) {
			setCookie(ACCOUNT_COOKIE.rememberUserEmail, form.getValues("email"), ACCOUNT_COOKIE.maxAge);
		} else {
			removeCookie(ACCOUNT_COOKIE.rememberUserEmail);
		}
	};
	const checkbox = [
		{
			value: "isRemember",
			label: "아이디 기억하기",
		},
	];

	const { handleSubmit } = form;

	const { mutate: mutatePostLogin } = useMutationPostLogin({});

	const handleFormSubmit = handleSubmit((data) => {
		mutatePostLogin(data, {
			onSuccess({ data: token }) {
				setCookie(COOKIE.accessToken, token);
				router.push("/");
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

	const { TextField, CheckboxGroup } = ReactHookForm<LoginForm>();

	useEffect(() => {
		if (rememberUserEmail !== undefined) {
			form.setValue("email", rememberUserEmail);
			setIsRemember(true);
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
					<CheckboxGroup formName="isRemember" checkboxes={checkbox} />
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
