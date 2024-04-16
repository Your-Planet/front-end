"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import { StyledBoldTypography } from "@/components/common/text/defines/styles";
import {
	personalInformationTosText,
	requiredTosText,
	shoppingInformationReceiptText,
} from "@/components/join/components/TermsView/defines/constants";
import {
	StyledAccordion,
	StyledButtonBox,
	StyledFlexColumnBox,
	StyledFormBox,
	StyledTermsViewBox,
} from "@/components/join/components/TermsView/defines/styles";
import { TermsDataType, TermsForm } from "@/components/join/components/TermsView/defines/types";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import { getIaPath } from "@/utils/ia";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { AccordionDetails, AccordionSummary, Button, TextField, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEventHandler, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface TermsViewProps {}

interface TermsFormInterface extends TermsForm {}

const termsData: TermsDataType[] = [
	{
		key: "termsOfService",
		formName: "termsOfService",
		label: "이용약관 동의",
		required: true,
		text: requiredTosText,
	},
	{
		key: "privacyPolicy",
		formName: "privacyPolicy",
		label: "개인정보 수집 및 이용 동의",
		required: true,
		text: personalInformationTosText,
	},
	{
		key: "shoppingInformation",
		formName: "shoppingInformation",
		label: "쇼핑정보 수집 및 이용 동의",
		required: false,
		text: shoppingInformationReceiptText,
	},
];

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

	const handleFormSubmit: FormEventHandler = handleSubmit(({ shoppingInformation }) => {
		const type = searchParams.get("type");

		// TODO @나은찬 예외처리(fallback?) - 경고 팝업?
		if (!type) {
			console.log("타입이 없습니다");
			return;
		}

		sessionStorage.setItem(SESSION_STORAGE.shoppingInformationTerm, shoppingInformation ? "true" : "false");

		if (type === "author") {
			router.push(getIaPath(IA.join.author.verify));
		} else if (type === "sponsor") {
			router.push(getIaPath(IA.join.sponsor.details));
		}
	});

	const getTerms = () => {
		return termsData.map(({ key, formName, label, required, text }) => (
			<StyledAccordion key={key} disableGutters>
				<AccordionSummary classes={{ content: "items-center" }} expandIcon={<ExpandMoreOutlined />}>
					<Checkbox key={key} formName={formName} label={label} hideErrorMessage />
					<Typography color={required ? "red" : "cornflowerblue"}>{required ? "(필수)" : "(선택)"}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<TextField
						variant="filled"
						defaultValue={text}
						fullWidth
						multiline
						rows={6}
						draggable={false}
						focused={false}
						hiddenLabel
						inputProps={{ style: { fontSize: 13 } }}
					/>
				</AccordionDetails>
			</StyledAccordion>
		));
	};

	return (
		<>
			<StyledTermsViewBox>
				<StyledFlexColumnBox>
					<StyledBoldTypography variant="h4">가입을 위해,</StyledBoldTypography>
					<StyledBoldTypography variant="h4">약관 동의가 필요해요.</StyledBoldTypography>
				</StyledFlexColumnBox>

				<form onSubmit={handleFormSubmit} noValidate>
					<StyledFormBox>
						<FormProvider {...form}>
							<StyledAccordion>
								<AccordionSummary>
									<Checkbox
										sx={{ color: "gray" }}
										key="all"
										formName="all"
										label={"회원가입 약관에 모두 동의합니다."}
										hideErrorMessage
										rules={{ onChange: handleCheckboxAllChange }}
									/>
								</AccordionSummary>
							</StyledAccordion>

							{getTerms()}

							<StyledButtonBox>
								<Button variant="outlined" size="large" onClick={handleClickBackButton}>
									뒤로가기
								</Button>

								<Button
									variant="contained"
									size="large"
									type="submit"
									disabled={!(termsOfServiceWatcher && privacyPolicyWatcher)}
								>
									동의
								</Button>
							</StyledButtonBox>
						</FormProvider>
					</StyledFormBox>
				</form>
			</StyledTermsViewBox>
		</>
	);
}

export default TermsView;
