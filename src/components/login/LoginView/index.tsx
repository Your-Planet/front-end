import Logo from "@/components/common/Logo";
import { FormProvider, useForm } from "react-hook-form";
import { LoginForm } from "@/components/login/LoginView/defines/types";
import ReactHookForm from "@/components/common/ReactHookForm";
import { Button } from "@mui/material";
import { isEmail } from "@/utils/string";

export interface LoginViewProps {}

function LoginView(props: LoginViewProps) {
	const {} = props;

	const form = useForm<LoginForm>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { handleSubmit } = form;

	const handleFormSubmit = handleSubmit((data) => {
		console.log(data);
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
		<>
			<div className="m-auto flex flex-col gap-12 p-8">
				<div className="text-center">
					<Logo />
				</div>

				<FormProvider {...form}>
					<form onSubmit={handleFormSubmit}>
						<TextField
							formName="email"
							label="이메일"
							type="email"
							fullWidth
							margin="normal"
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
			</div>
		</>
	);
}

export default LoginView;
