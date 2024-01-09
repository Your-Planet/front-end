import Logo from "@/components/common/Logo";
import { FormProvider, useForm } from "react-hook-form";
import { LoginForm } from "@/components/login/LoginView/defines/types";
import ReactHookForm from "@/components/common/ReactHookForm";

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

	const { TextField } = ReactHookForm<LoginForm>();

	return (
		<>
			<div className="m-auto flex flex-col gap-24">
				<Logo />

				<FormProvider {...form}>
					<form>
						<TextField formName="email" label="이메일" fullWidth />
						<TextField formName="password" label="비밀번호" type="password" fullWidth />
					</form>
				</FormProvider>
			</div>
		</>
	);
}

export default LoginView;
