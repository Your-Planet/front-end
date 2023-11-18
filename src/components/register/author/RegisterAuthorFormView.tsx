"use client";

import { FormProvider, useForm } from "react-hook-form";
import { RegisterAuthorForm } from "@/defines/forms/register/author/types";
import { FormEventHandler } from "react";
import { Button } from "@mui/material";
import ReactHookForm from "@/components/common/ReactHookForm";

export interface RegisterAuthorFormViewProps {}

function RegisterAuthorFormView(props: RegisterAuthorFormViewProps) {
	const {} = props;

	const form = useForm<RegisterAuthorForm>();
	const { handleSubmit } = form;

	const handleFormSubmit: FormEventHandler = handleSubmit(
		(data) => {
			console.log(data);
		},
		() => {},
	);

	const { TextField } = ReactHookForm<RegisterAuthorForm>();

	return (
		<>
			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit}>
					<TextField formName={"email"} label={"이메일"} placeholder={"abc12@naver.com"} />

					<TextField formName={"password"} label={"비밀번호"} placeholder={"TODO @김현규 비밀번호 조건"} />

					<TextField
						formName={"passwordConfirm"}
						label={"비밀번호 확인"}
						placeholder={"비밀번호를 다시 한번 입력하세요"}
					/>

					<TextField formName={"name"} label={"이름"} />

					{/*TODO @김현규 성별*/}

					{/*TODO @김현규 연락처 하이픈(-) 자동 붙여주기*/}
					<TextField formName={"tel"} label={"연락처"} placeholder={"숫자만 입력하세요"} />

					{/*TODO @김현규 생년월일*/}

					<TextField formName={"instagramId"} label={"인스타그램 아이디"} />
					<Button>가입하기</Button>
				</form>
			</FormProvider>
		</>
	);
}

export default RegisterAuthorFormView;
