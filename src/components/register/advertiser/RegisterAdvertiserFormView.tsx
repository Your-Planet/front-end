"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import PasswordTextField from "@/components/common/password/PasswordTextField";
import H2 from "@/components/common/text/H2";
import { REGISTER_ADVERTISER_FORM_FIELD_LENGTH } from "@/defines/forms/register/advertiser/constants";
import { RegisterAdvertiserForm } from "@/defines/forms/register/advertiser/types";
import useMutationPostAdvertiserRegister from "@/hooks/queries/member/useMutationPostAdvertiserRegister";
import { getObjectAtPath } from "@/utils/object";
import { getEmailValidateRule, getLengthErrorMessage } from "@/utils/react-hook-form/rule";
import { isNumber } from "@/utils/string";
import { Box, Button, FormControl, FormHelperText } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { FormProvider, useForm } from "react-hook-form";

export interface RegisterAdvertiserFormViewProps {}

function RegisterAdvertiserFormView(props: RegisterAdvertiserFormViewProps) {
	const {} = props;
	const router = useRouter();

	const openPostcodePopup = useDaumPostcodePopup(postcodeScriptUrl);

	const form = useForm<RegisterAdvertiserForm>({
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
		},
	});

	const {
		handleSubmit,
		setValue,
		trigger,
		formState: { errors },
	} = form;

	const { mutate: mutatePostRegister } = useMutationPostAdvertiserRegister({});

	const handleFormSubmit: FormEventHandler = handleSubmit(
		({ genderType, birthDate, businessAddress, passwordConfirm, ...rest }) => {
			mutatePostRegister(
				{
					...rest,
					genderType: genderType!,
					birthDate: birthDate!.format("YYYY-mm-dd"),
					businessAddress: `${businessAddress.base} ${businessAddress.detail}`,
				},
				{
					onSuccess() {
						// TODO @김현규 회원가입 성공 토스트 메시지 추가
						router.push("/login");
					},
					onError() {
						// TODO @김현규 회원가입 실패 안내 처리
					},
				},
			);
		},
		(errors) => {
			console.log(errors);
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

	const { TextField } = ReactHookForm<RegisterAdvertiserForm>();

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
							validate(value) {
								if (!value || value.length === REGISTER_ADVERTISER_FORM_FIELD_LENGTH.businessNumber) return true;
								return getLengthErrorMessage(REGISTER_ADVERTISER_FORM_FIELD_LENGTH.businessNumber);
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

					<TextField
						formName="tel"
						label="연락처"
						required
						validator={isNumber}
						placeholder="숫자만 입력하세요"
						type="tel"
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

					<Button type="submit" variant="contained" size="large" fullWidth>
						가입하기
					</Button>
				</form>
			</FormProvider>
		</div>
	);
}

export default RegisterAdvertiserFormView;
