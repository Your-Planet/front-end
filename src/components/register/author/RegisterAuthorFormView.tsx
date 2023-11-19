"use client";

import { FormProvider, useForm } from "react-hook-form";
import { RegisterAuthorForm, WatchedRegisterAuthorForm } from "@/defines/forms/register/author/types";
import { FormEventHandler } from "react";
import { Button } from "@mui/material";
import ReactHookForm from "@/components/common/ReactHookForm";
import { SexType } from "@/defines/member/types";
import H2 from "@/components/common/text/H2";
import { isNumber } from "@/utils/string";
import { getEmailValidateRule, getPasswordConfirmValidateRule } from "@/utils/react-hook-form/rule";

export interface RegisterAuthorFormViewProps {}

function RegisterAuthorFormView(props: RegisterAuthorFormViewProps) {
	const {} = props;

	const form = useForm<RegisterAuthorForm>({
		mode: "all",
		defaultValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			name: "",
			sex: undefined,
			tel: "",
			instagramId: "",
		},
	});
	const { handleSubmit, watch } = form;

	const watchedValue: WatchedRegisterAuthorForm = {
		password: watch("password"),
	};

	const handleFormSubmit: FormEventHandler = handleSubmit(
		(data) => {
			console.log(data);
		},
		() => {},
	);

	const { TextField, RadioGroup } = ReactHookForm<RegisterAuthorForm>();

	return (
		<>
			<div className={"max-w-[520px] mx-auto py-28"}>
				<H2>회원 가입 (작가)</H2>

				<FormProvider {...form}>
					<form onSubmit={handleFormSubmit} className={"mt-8 flex flex-col gap-4"}>
						<TextField
							formName={"email"}
							label={"이메일"}
							required
							rules={{
								...getEmailValidateRule(),
							}}
							placeholder={"abc12@naver.com"}
							fullWidth
						/>

						{/*TODO @김현규 비밀번호 조건*/}
						<TextField
							formName={"password"}
							label={"비밀번호"}
							required
							placeholder={"TODO @김현규 비밀번호 조건"}
							type={"password"}
							fullWidth
						/>

						{/*TODO @김현규 비밀번호 일치 확인*/}
						<TextField
							formName={"passwordConfirm"}
							label={"비밀번호 확인"}
							required
							rules={{
								...getPasswordConfirmValidateRule(watchedValue.password!),
							}}
							placeholder={"비밀번호를 다시 한번 입력하세요"}
							type={"password"}
							fullWidth
						/>

						<TextField formName={"name"} label={"이름"} required fullWidth />

						<RadioGroup<SexType>
							label={"성별"}
							formName={"sex"}
							required
							radios={[
								{
									label: "남",
									value: "MALE",
								},
								{
									label: "여",
									value: "FEMALE",
								},
							]}
						/>

						<TextField
							formName={"tel"}
							label={"연락처"}
							required
							validator={isNumber}
							placeholder={"숫자만 입력하세요"}
							fullWidth
							type={"tel"}
						/>

						{/*TODO @김현규 생년월일*/}

						<TextField formName={"instagramId"} label={"인스타그램 아이디"} required fullWidth />

						<Button type={"submit"} variant={"contained"} size={"large"} fullWidth>
							가입하기
						</Button>
					</form>
				</FormProvider>
			</div>
		</>
	);
}

export default RegisterAuthorFormView;
