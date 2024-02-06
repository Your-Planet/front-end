import Logo from "@/components/common/Logo";
import ReactHookForm from "@/components/common/ReactHookForm";
import { LoginForm } from "@/components/login/LoginView/defines/types";
import useLoginViewRedirect from "@/components/login/LoginView/hooks/useLoginViewRedirect";
import { COOKIE } from "@/defines/cookie/constants";
import useMutationPostLogin from "@/hooks/queries/member/useMutationPostLogin";
import { setCookie } from "@/utils/cookie";
import { isEmail } from "@/utils/string";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

export interface LoginViewProps {}

function LoginView(props: LoginViewProps) {
	const {} = props;

	const router = useRouter();

	useLoginViewRedirect();

	const form = useForm<LoginForm>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

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

	const { TextField } = ReactHookForm<LoginForm>();

	return (
		<div className="m-auto p-8">
			<div className="text-center">
				<Logo />
			</div>

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
					<Button fullWidth variant="contained" size="large" type="submit">
						로그인
					</Button>
				</form>
			</FormProvider>

			<div className="text-center mt-8">
				<Link href="/register" className="text-gray-500 no-underline">
					회원가입
				</Link>
			</div>
		</div>
	);
}

export default LoginView;
