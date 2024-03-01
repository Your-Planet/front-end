"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import H2 from "@/components/common/text/H2";
import useJoinForm from "@/components/join/form/hooks/useJoinForm";
import { JoinAuthorForm } from "@/defines/forms/join/author/types";
import { GenderType } from "@/defines/member/types";
import useMutationPostAuthorJoin from "@/hooks/queries/member/useMutationPostAuthorJoin";
import { getEmailValidateRule } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { Button } from "@mui/material";
import { FormEventHandler } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface JoinAuthorFormViewProps {
	instagramAuthCode: string;
}

function JoinAuthorFormView(props: JoinAuthorFormViewProps) {
	const { instagramAuthCode } = props;

	const form = useForm<JoinAuthorForm>({
		mode: "all",
		defaultValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			name: "",
			genderType: null,
			tel: "",
			birthDate: null,
		},
	});

	const { handleSubmit } = form;

	const { mutate: mutatePostJoin } = useMutationPostAuthorJoin({});

	const { handleSuccessJoin, handleFailJoin } = useJoinForm();

	const handleFormSubmit: FormEventHandler = handleSubmit(({ genderType, birthDate, passwordConfirm, ...rest }) => {
		mutatePostJoin(
			{
				...rest,
				genderType: genderType!,
				birthDate: birthDate!.format("YYYY-MM-DD"),
				instagramAuthCode,
				memberType: "AUTHOR",
			},
			{
				onSuccess: handleSuccessJoin,
				onError: handleFailJoin,
			},
		);
	});

	const { TextField, RadioGroup, DatePicker } = ReactHookForm<JoinAuthorForm>();

	return (
		<div className="max-w-[520px] mx-auto py-28">
			<H2>회원 가입 (작가)</H2>

			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-4">
					<TextField
						formName="email"
						label="이메일"
						required
						rules={{
							...getEmailValidateRule(),
						}}
						placeholder="abc12@naver.com"
						type="email"
						fullWidth
					/>

					<PasswordTextField />

					<TextField formName="name" label="이름" required fullWidth />

					<RadioGroup<GenderType>
						label="성별"
						formName="genderType"
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
						formName="tel"
						label="연락처"
						required
						validator={isNumber}
						placeholder="숫자만 입력하세요"
						type="tel"
						fullWidth
					/>

					<DatePicker formName="birthDate" label="생년월일" required />

					<Button type="submit" variant="contained" size="large" fullWidth>
						가입하기
					</Button>
				</form>
			</FormProvider>
		</div>
	);
}

export default JoinAuthorFormView;