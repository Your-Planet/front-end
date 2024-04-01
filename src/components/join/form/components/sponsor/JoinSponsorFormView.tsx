"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import H2 from "@/components/common/text/H2";
import useJoinForm from "@/components/join/form/hooks/useJoinForm";
import { COOKIE } from "@/defines/cookie/constants";
import { JOIN_SPONSOR_FORM_FIELD_LENGTH } from "@/defines/forms/join/sponsor/constants";
import { JoinSponsorForm } from "@/defines/forms/join/sponsor/types";
import { GenderType, SubscriptionPathType } from "@/defines/member/types";
import useMutationPostSponsorJoin from "@/hooks/queries/member/useMutationPostSponsorJoin";
import { getCookie } from "@/utils/cookie";
import { getObjectAtPath } from "@/utils/object";
import { getEmailValidateRule, getLengthErrorMessage } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { Box, Button, FormControl, FormHelperText } from "@mui/material";
import { FormEventHandler } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { FormProvider, useForm } from "react-hook-form";

export interface JoinSponsorFormViewProps {}

function JoinSponsorFormView(props: JoinSponsorFormViewProps) {
	const {} = props;

	const openPostcodePopup = useDaumPostcodePopup(postcodeScriptUrl);

	const form = useForm<JoinSponsorForm>({
		mode: "all",
		defaultValues: {
			email: "",
			password: "",
			passwordConfirm: "",
			companyName: "",
			businessNumber: "",
			representativeName: "",
			tel: "",
			businessAddress: {
				base: "",
				detail: "",
			},
			name: "",
			isTermsOfService: false,
			isPrivacyPolicy: false,
			isShoppingInformation: false,
		},
	});

	const {
		handleSubmit,
		setValue,
		trigger,
		formState: { errors },
	} = form;

	const { mutate: mutatePostJoin } = useMutationPostSponsorJoin({});

	const { handleSuccessJoin, handleFailJoin } = useJoinForm();

	const handleFormSubmit: FormEventHandler = handleSubmit(
		({ genderType, birthDate, businessAddress, passwordConfirm, ...rest }) => {
			const shoppingInformationTerm = getCookie(COOKIE.shoppingInformationTerm) === "true";
			console.log(genderType, birthDate, businessAddress, passwordConfirm, rest);
			mutatePostJoin(
				{
					...rest,
					genderType: genderType!,
					birthDate: birthDate?.format("YYYY-mm-dd"),
					businessAddress: `${businessAddress.base} ${businessAddress.detail}`,
					memberType: "SPONSOR",
					isTermsOfService: true,
					isPrivacyPolicy: true,
					isShoppingInformation: shoppingInformationTerm,
				},
				{
					onSuccess: handleSuccessJoin,
					onError: handleFailJoin,
				},
			);
		},
	);

	const handleClickSearchAddress = () => {
		openPostcodePopup({
			onComplete({ address }) {
				setValue("businessAddress.base", address);
			},
			onClose() {
				trigger("businessAddress.base");
			},
		});
	};

	const addressErrorMessage = getObjectAtPath(errors, "businessAddress.base")?.message ?? " ";

	const { TextField, RadioGroup, DatePicker } = ReactHookForm<JoinSponsorForm>();

	return (
		<div className="max-w-[520px] mx-auto py-28">
			<H2>회원 가입 (광고주)</H2>

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

					<TextField formName="companyName" label="상호" required placeholder="상호를 입력하세요" fullWidth />

					<TextField
						formName="businessNumber"
						label="사업자번호"
						required
						rules={{
							validate(value: string) {
								if (!value || value.length === JOIN_SPONSOR_FORM_FIELD_LENGTH.businessNumber) return true;
								return getLengthErrorMessage(JOIN_SPONSOR_FORM_FIELD_LENGTH.businessNumber);
							},
						}}
						placeholder="숫자만 입력하세요"
						fullWidth
						type="tel"
					/>

					<TextField
						formName="representativeName"
						label="대표자명"
						required
						placeholder="대표자명을 입력하세요"
						fullWidth
					/>

					<Box width="100%">
						<FormControl fullWidth>
							<TextField
								formName="businessAddress.base"
								label="사업장 주소"
								required
								fullWidth
								sx={{
									"& fieldset": {
										borderBottomLeftRadius: 0,
										borderBottomRightRadius: 0,
										borderBottomColor: "transparent",
									},
									"& input": {
										paddingBottom: "16px",
									},
								}}
								margin="none"
								inputProps={{ readOnly: true }}
								hideErrorMessage
								onClick={handleClickSearchAddress}
							/>
							<TextField
								formName="businessAddress.detail"
								label=""
								placeholder="상세 주소"
								fullWidth
								sx={{ "& fieldset": { borderTopLeftRadius: 0, borderTopRightRadius: 0 } }}
								margin="none"
								hideErrorMessage
							/>
							<FormHelperText error>{addressErrorMessage}</FormHelperText>
						</FormControl>
					</Box>

					<TextField formName="name" label="담당자명" required fullWidth />

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

					{/* TODO: 가입경로 추가(인터넷 검색, 지인 소개, 인스타그램, 기타 */}
					<RadioGroup<SubscriptionPathType>
						label="가입경로"
						formName="subscriptionPath"
						radios={[
							{
								label: "인터넷 검색",
								value: "SEARCH",
							},
							{
								label: "지인 소개",
								value: "RECOMMEND",
							},
							{
								label: "인스타그램",
								value: "INSTAGRAM",
							},
							{
								label: "기타",
								value: "", // TODO : input 필드로 바꾸기
							},
						]}
					/>

					<Button type="submit" variant="contained" size="large" fullWidth>
						가입하기
					</Button>
				</form>
			</FormProvider>
		</div>
	);
}

export default JoinSponsorFormView;
