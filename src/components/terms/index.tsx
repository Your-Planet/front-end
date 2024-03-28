"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import {
	personalInformationTosText,
	requiredTosText,
	shoppingInformationReceiptText,
} from "@/components/terms/defines/constants";
import { Accordion, GRAY_COLOR } from "@/components/terms/defines/styles";
import { TermsForm } from "@/components/terms/defines/types";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { setCookie } from "@/utils/cookie";
import { getIaPath } from "@/utils/ia";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Box, Button, TextField, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEventHandler, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface TermsViewProps {}

interface TermsFormInterface extends TermsForm {}

function TermsView(props: TermsViewProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const form = useForm<TermsFormInterface>({
		defaultValues: {
			all: false,
			termsOfService: false,
			privacyPolicy: false,
			shoppingInformation: false,
		},
	});

	// TODO: Backend에서 api or column 추가 필요
	const { handleSubmit, setValue, watch } = form;

	const termsOfServiceWatcher = watch("termsOfService");
	const privacyPolicyWatcher = watch("privacyPolicy");
	const shoppingInformationWatcher = watch("shoppingInformation");

	useEffect(() => {
		setValue("all", termsOfServiceWatcher && privacyPolicyWatcher && shoppingInformationWatcher);
	}, [termsOfServiceWatcher, privacyPolicyWatcher, shoppingInformationWatcher]);

	const { Checkbox } = ReactHookForm<TermsFormInterface>();

	const handleCheckboxAllChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue("termsOfService", Boolean(event.target.value));
		setValue("privacyPolicy", Boolean(event.target.value));
		setValue("shoppingInformation", Boolean(event.target.value));
	};

	const handleClickBackButton = () => {
		router.push(getIaPath(IA.join));
	};

	const handleFormSubmit: FormEventHandler = handleSubmit(({ termsOfService, privacyPolicy, shoppingInformation }) => {
		const type = searchParams.get("type");

		// TODO @나은찬 예외처리(fallback?) - 경고 팝업?
		if (!(termsOfService && privacyPolicy)) {
			console.log("필수 동의 필요");
			return;
		} else if (!type) {
			console.log("타입이 없습니다");
			return;
		}

		setCookie(COOKIE.shoppingInformationTerm, shoppingInformation);

		if (type === "author") {
			router.push(getIaPath(IA.join.author.verify));
		} else if (type === "sponsor") {
			router.push(getIaPath(IA.join.sponsor));
		}
	});

	return (
		<>
			<Box className="max-w-[500px] w-full flex flex-col justify-between py-7 m-auto gap-7">
				<Box className="flex flex-col">
					<Typography className="font-bold" variant="h4">
						가입을 위해,
					</Typography>
					<Typography className="font-bold" variant="h4">
						약관 동의가 필요해요.
					</Typography>
				</Box>

				<form onSubmit={handleFormSubmit} noValidate>
					<Box className="flex flex-col gap-3">
						<FormProvider {...form}>
							<Accordion>
								<AccordionSummary>
									<Checkbox
										sx={{ color: GRAY_COLOR }}
										key="all"
										formName="all"
										label={"회원가입 약관에 모두 동의합니다."}
										hideErrorMessage
										rules={{ onChange: handleCheckboxAllChange }}
									/>
								</AccordionSummary>
							</Accordion>

							<Accordion disableGutters>
								<AccordionSummary expandIcon={<ExpandMoreOutlined />}>
									<Checkbox
										sx={{ color: GRAY_COLOR }}
										key="termsOfService"
										formName="termsOfService"
										label={"이용약관 동의"}
										hideErrorMessage
									/>
								</AccordionSummary>
								<AccordionDetails>
									<TextField
										variant="filled"
										defaultValue={requiredTosText}
										fullWidth
										multiline
										rows={6}
										draggable="false"
										focused={false}
										hiddenLabel
										inputProps={{
											style: {
												fontSize: 13,
											},
										}}
									/>
								</AccordionDetails>
							</Accordion>

							<Accordion disableGutters>
								<AccordionSummary expandIcon={<ExpandMoreOutlined />}>
									<Checkbox
										sx={{ color: GRAY_COLOR }}
										key="privacyPolicy"
										formName="privacyPolicy"
										label={"개인정보 수집 및 이용 동의"}
										hideErrorMessage
									/>
								</AccordionSummary>
								<AccordionDetails>
									<TextField
										variant="filled"
										defaultValue={personalInformationTosText}
										fullWidth
										multiline
										rows={6}
										draggable="false"
										focused={false}
										hiddenLabel
										inputProps={{
											style: {
												fontSize: 13,
											},
										}}
									/>
								</AccordionDetails>
							</Accordion>

							<Accordion disableGutters>
								<AccordionSummary expandIcon={<ExpandMoreOutlined />}>
									<Checkbox
										sx={{ color: GRAY_COLOR }}
										key="shoppingInformation"
										formName="shoppingInformation"
										label={"쇼핑정보 수집 및 이용 동의"}
										hideErrorMessage
									/>
								</AccordionSummary>
								<AccordionDetails>
									<TextField
										variant="filled"
										defaultValue={shoppingInformationReceiptText}
										fullWidth
										multiline
										rows={6}
										draggable="false"
										focused={false}
										hiddenLabel
										inputProps={{
											style: {
												fontSize: 13,
											},
										}}
									/>
								</AccordionDetails>
							</Accordion>

							<Box className="flex justify-end gap-3">
								<Button
									className="bg-gray-400 font-bold"
									variant="contained"
									size="large"
									onClick={handleClickBackButton}
								>
									뒤로가기
								</Button>

								<Button
									className="font-bold"
									variant="contained"
									size="large"
									type="submit"
									disabled={!(termsOfServiceWatcher && privacyPolicyWatcher)}
								>
									동의
								</Button>
							</Box>
						</FormProvider>
					</Box>
				</form>
			</Box>
		</>
	);
}

export default TermsView;
