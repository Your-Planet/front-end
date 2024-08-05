"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import H2 from "@/components/common/text/H2";
import { StyledBoxInJoin, StyledFormInJoin } from "@/components/join/form/components/defines/styles";
import useJoinForm from "@/components/join/form/hooks/useJoinForm";
import { COOKIE } from "@/defines/cookie/constants";
import { JoinCreatorForm } from "@/defines/forms/join/creator/types";
import { GenderType } from "@/defines/member/types";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import useMutationPostCreatorJoin from "@/hooks/queries/auth/useMutationPostCreatorJoin";
import useQueryGetMe from "@/hooks/queries/instagram-graph/useQueryGetMe";
import { getCookie } from "@/utils/cookie";
import { getEmailValidateRule } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { LoadingButton } from "@mui/lab";
import { FormEventHandler, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

function JoinCreatorFormView() {
	const form = useForm<JoinCreatorForm>({
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
			termsInfo: {
				isTermsOfService: false,
				isPrivacyPolicy: false,
				isShoppingInformation: false,
			},
		},
	});

	const { handleSubmit, setValue } = form;

	const { mutate: mutatePostJoin, isPending } = useMutationPostCreatorJoin({});

	const { handleSuccessJoin, handleFailJoin } = useJoinForm();

	const instagramAccessToken = getCookie(COOKIE.instagramAccessToken);

	const handleFormSubmit: FormEventHandler = handleSubmit(({ genderType, birthDate, passwordConfirm, ...rest }) => {
		const isShoppingInformation = sessionStorage.getItem(SESSION_STORAGE.shoppingInformationTerm) === "true";

		mutatePostJoin(
			{
				...rest,
				genderType: genderType!,
				birthDate: birthDate!.format("YYYY-MM-DD"),
				memberType: "CREATOR",
				termsInfo: {
					isTermsOfService: true,
					isPrivacyPolicy: true,
					isShoppingInformation,
				},
			},
			{
				onSuccess: handleSuccessJoin,
				onError: handleFailJoin,
			},
		);
	});

	const { TextField, RadioGroup, DatePicker } = ReactHookForm<JoinCreatorForm>();

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
		<StyledBoxInJoin>
			<H2>회원 가입 (작가)</H2>

			<FormProvider {...form}>
				<StyledFormInJoin onSubmit={handleFormSubmit}>
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

					<LoadingButton type="submit" variant="contained" size="large" fullWidth loading={isPending}>
						가입하기
					</LoadingButton>
				</StyledFormInJoin>
			</FormProvider>
		</StyledBoxInJoin>
	);
}

export default JoinCreatorFormView;
