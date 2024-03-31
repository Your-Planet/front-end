"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import H2 from "@/components/common/text/H2";
import useJoinForm from "@/components/join/form/hooks/useJoinForm";
import { COOKIE } from "@/defines/cookie/constants";
import { JoinAuthorForm } from "@/defines/forms/join/author/types";
import { GenderType } from "@/defines/member/types";
import useQueryGetMe from "@/hooks/queries/instagram-graph/useQueryGetMe";
import useMutationPostAuthorJoin from "@/hooks/queries/member/useMutationPostAuthorJoin";
import { getCookie } from "@/utils/cookie";
import { getEmailValidateRule } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { Button } from "@mui/material";
import { FormEventHandler, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

function JoinAuthorFormView() {
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
			instagramId: "",
			instagramUsername: "",
			instagramAccessToken: "",
			isTermsOfService: false,
			isPrivacyPolicy: false,
			isShoppingInformation: false,
		},
	});

	const { handleSubmit, setValue } = form;

	const { mutate: mutatePostJoin } = useMutationPostAuthorJoin({});

	const { handleSuccessJoin, handleFailJoin } = useJoinForm();

	const instagramAccessToken = getCookie(COOKIE.instagramAccessToken);

	const handleFormSubmit: FormEventHandler = handleSubmit(({ genderType, birthDate, passwordConfirm, ...rest }) => {
		const shoppingInformationTerm = getCookie(COOKIE.shoppingInformationTerm) === "true";

		mutatePostJoin(
			{
				...rest,
				genderType: genderType!,
				birthDate: birthDate!.format("YYYY-MM-DD"),
				memberType: "AUTHOR",
				isTermsOfService: true,
				isPrivacyPolicy: true,
				isShoppingInformation: shoppingInformationTerm,
			},
			{
				onSuccess: handleSuccessJoin,
				onError: handleFailJoin,
			},
		);
	});

	const { TextField, RadioGroup, DatePicker } = ReactHookForm<JoinAuthorForm>();

	const { data: instagramMe } = useQueryGetMe({
		req: {
			access_token: instagramAccessToken,
			fields: ["id", "username"],
		},
	});

	useEffect(() => {
		setValue("instagramAccessToken", instagramAccessToken);
	}, [instagramAccessToken]);

	useEffect(() => {
		if (instagramMe) {
			setValue("instagramId", instagramMe.id!);
			setValue("instagramUsername", instagramMe.username!);
		}
	}, [instagramMe]);

	return (
		<div className="max-w-[520px] mx-auto py-28">
			<H2>회원 가입 (작가)</H2>

			<FormProvider {...form}>
				<form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-4">
					<TextField formName="instagramUsername" label="인스타그램 계정" fullWidth disabled />

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
