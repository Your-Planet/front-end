"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import {
	personalInformationTosText,
	requiredTosText,
	shoppingInformationReceiptText,
} from "@/components/terms/defines/constants";
import { Accordion, GRAY_COLOR } from "@/components/terms/defines/styles";
import { TermsForm } from "@/components/terms/defines/types";
import { IA } from "@/defines/ia/constants";
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

	const watcherForTerms = watch(["termsOfService", "privacyPolicy", "shoppingInformation"]);

	useEffect(() => {
		setValue(
			"all",
			watcherForTerms.every((value) => value === true),
		);
	}, [watcherForTerms]);

	// const { mutate: mutatePostTerms } = useMutationPostTerms({});

	const { Checkbox } = ReactHookForm<TermsFormInterface>();

	const handleCheckboxAllChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue("termsOfService", Boolean(event.target.value));
		setValue("privacyPolicy", Boolean(event.target.value));
		setValue("shoppingInformation", Boolean(event.target.value));
	};

	const handleClickBackButton = () => {
		router.push(getIaPath(IA.join));
	};

	const handleFormSubmit: FormEventHandler = handleSubmit(
		({ all, termsOfService, privacyPolicy, shoppingInformation }) => {
			const type = searchParams.get("type");

			if (!(termsOfService && privacyPolicy)) {
				console.log("필수 선택에 체크 필요!");
				return;
			}

			if (shoppingInformation) {
				console.log("선택 동의 완료");
			}
			console.log("필수 동의 완료");

			if (type === "author") {
				router.push(getIaPath(IA.join.author.verify));
			} else if (type === "sponsor") {
				router.push(getIaPath(IA.join.sponsor.details));
			} else {
				console.log("타입이 없습니다");
			}
		},
	);

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
									className="bg-gray-500 font-bold"
									variant="contained"
									size="large"
									onClick={handleClickBackButton}
								>
									뒤로가기
								</Button>

								<Button className="font-bold" variant="contained" size="large" type="submit">
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
