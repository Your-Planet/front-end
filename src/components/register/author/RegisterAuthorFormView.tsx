"use client";

import { FormProvider, useForm } from "react-hook-form";
import { RegisterAuthorForm } from "@/defines/forms/register/author/types";
import { FormEventHandler } from "react";
import { Button } from "@mui/material";
import ReactHookForm from "@/components/common/ReactHookForm";
import { SexType } from "@/defines/member/types";
import H2 from "@/components/common/text/H2";

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

	const { TextField, RadioGroup } = ReactHookForm<RegisterAuthorForm>();

	return (
		<>
			<div className={"max-w-[520px] mx-auto py-28"}>
				<H2>회원 가입 (작가)</H2>

				<FormProvider {...form}>
					<form onSubmit={handleFormSubmit} className={"mt-8 flex flex-col gap-8"}>
						<TextField formName={"email"} label={"이메일"} placeholder={"abc12@naver.com"} fullWidth />

						<TextField
							formName={"password"}
							label={"비밀번호"}
							placeholder={"TODO @김현규 비밀번호 조건"}
							type={"password"}
							fullWidth
						/>

						<TextField
							formName={"passwordConfirm"}
							label={"비밀번호 확인"}
							placeholder={"비밀번호를 다시 한번 입력하세요"}
							type={"password"}
							fullWidth
						/>

						<TextField formName={"name"} label={"이름"} fullWidth />

						<RadioGroup<SexType>
							label={"성별"}
							formName={"sex"}
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

						{/*TODO @김현규 연락처 하이픈(-) 자동 붙여주기*/}
						<TextField formName={"tel"} label={"연락처"} placeholder={"숫자만 입력하세요"} fullWidth type={"number"} />

						{/*TODO @김현규 생년월일*/}

						<TextField formName={"instagramId"} label={"인스타그램 아이디"} fullWidth />

						<Button variant={"contained"} size={"large"} fullWidth>
							가입하기
						</Button>
					</form>
				</FormProvider>
			</div>
		</>
	);
}

export default RegisterAuthorFormView;
