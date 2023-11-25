"use client";

import { FormProvider, useForm } from "react-hook-form";
import { RegisterAdvertiserForm } from "@/defines/forms/register/advertiser/types";
import { FormEventHandler } from "react";
import ReactHookForm from "@/components/common/ReactHookForm";
import H2 from "@/components/common/text/H2";
import {
	getEmailValidateRule,
	getLengthErrorMessage,
	getPasswordConfirmValidateRule,
} from "@/utils/react-hook-form/rule";
import { WatchedRegisterAuthorForm } from "@/defines/forms/register/author/types";
import { REGISTER_ADVERTISER_FORM_FIELD_LENGTH } from "@/defines/forms/register/advertiser/constants";
import { isNumber } from "@/utils/string";
import { Box, Button, FormControl, FormHelperText } from "@mui/material";
import { getObjectAtPath } from "@/utils/object";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

export interface RegisterAdvertiserFormViewProps {}

function RegisterAdvertiserFormView(props: RegisterAdvertiserFormViewProps) {
	const {} = props;

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
		watch,
		setValue,
		formState: { errors },
	} = form;

	const watchedValue: WatchedRegisterAuthorForm = {
		password: watch("password"),
	};

	const handleFormSubmit: FormEventHandler = handleSubmit(
		(data) => {
			console.log(data);
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
		});
	};

	const addressErrorMessage = getObjectAtPath(errors, "businessAddress.base")?.message ?? " ";

	const { TextField } = ReactHookForm<RegisterAdvertiserForm>();

	return (
		<>
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

						{/*TODO @김현규 비밀번호 조건*/}
						<TextField
							formName="password"
							label="비밀번호"
							required
							placeholder="TODO @김현규 비밀번호 조건"
							type="password"
							fullWidth
						/>

						<TextField
							formName="passwordConfirm"
							label="비밀번호 확인"
							required
							rules={{
								...getPasswordConfirmValidateRule(watchedValue.password!),
							}}
							placeholder="비밀번호를 다시 한번 입력하세요"
							type="password"
							fullWidth
						/>

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
		</>
	);
}

export default RegisterAdvertiserFormView;
