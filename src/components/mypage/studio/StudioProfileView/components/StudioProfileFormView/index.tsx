"use client";

import DynamicAppend from "@/components/common/DynamicAppend";
import ReactHookForm from "@/components/common/ReactHookForm";
import {
	DEFAULT_PORTFOLIO_LINK,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { getMaxLengthRule, getMinLengthRule } from "@/utils/react-hook-form/rule";
import { FormHelperText, FormLabel, Grid, TextField as ReadOnlyTextField, Stack } from "@mui/material";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

export interface StudioProfileFormViewProps {}

function StudioProfileFormView(props: StudioProfileFormViewProps) {
	const {} = props;

	const { TextField, Checkbox } = ReactHookForm<StudioProfileForm>();

	const form = useForm<StudioProfileForm>({
		mode: "all",
		defaultValues: {
			name: "",
			description: "",
			category: {
				DAILY_LIFE: false,
				EXERCISE: false,
				FASHION: false,
				PARENTING: false,
				BEAUTY: false,
				ECONOMY: false,
				SELF_IMPROVEMENT: false,
				EMPATHY: false,
				INVESTMENT: false,
				HUMOR: false,
				TRAVEL: false,
				TIPS: false,
				ROMANCE: false,
				MARRIAGE: false,
				HEALING: false,
			},
			portfolioLinks: [DEFAULT_PORTFOLIO_LINK],
		},
	});

	const {
		handleSubmit,
		getValues,
		setError,
		clearErrors,
		formState: { errors },
	} = form;

	const handleFormSubmit: FormEventHandler = handleSubmit(() => {});

	const handleChangeCategory = () => {
		const category = getValues("category");
		const { length } = Object.values(category).filter(Boolean);

		if (length < STUDIO_PROFILE_FORM_LENGTH.category.min) {
			setError("category", {
				type: "min",
				message: "인스타툰 카테고리를 1개 이상 선택해주세요.",
			});
			return;
		}

		if (length > STUDIO_PROFILE_FORM_LENGTH.category.max) {
			setError("category", {
				type: "max",
				message: "인스타툰 카테고리는 최대 5개까지 선택 가능합니다.",
			});
			return;
		}

		if (errors.category) {
			clearErrors("category");
		}
	};

	return (
		<StudioFormView title={"프로필 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
			<ReadOnlyTextField label="인스타그램 계정" disabled helperText=" " />

			<TextField
				formName="name"
				label="인스타툰 네임"
				required
				rules={getMaxLengthRule(STUDIO_PROFILE_FORM_LENGTH.name.max)}
			/>

			<TextField
				formName="description"
				label="인스타툰 소개"
				required
				multiline
				rows={6}
				rules={{
					...getMinLengthRule(STUDIO_PROFILE_FORM_LENGTH.description.min),
					...getMaxLengthRule(STUDIO_PROFILE_FORM_LENGTH.description.max),
				}}
			/>

			<Stack>
				<FormLabel required>인스타툰 카테고리</FormLabel>
				<Grid container spacing={1}>
					{Object.entries(INSTATOON_CATEGORY_NAME_BY_TYPE).map(([instatoonCategoryType, label]) => (
						<Grid item xs={3} key={instatoonCategoryType}>
							<Checkbox
								formName={`category.${instatoonCategoryType as InstatoonCategoryType}`}
								label={label}
								hideErrorMessage
								rules={{
									onChange: handleChangeCategory,
								}}
							/>
						</Grid>
					))}
				</Grid>
				<FormHelperText error>{errors?.category?.message ?? " "}</FormHelperText>
			</Stack>

			<DynamicAppend<StudioProfileForm>
				label="포트폴리오 링크"
				formName="portfolioLinks"
				component={({ index }) => <TextField formName={`portfolioLinks.${index}.content`} label="" fullWidth />}
				maxCount={10}
				defaultValue={DEFAULT_PORTFOLIO_LINK}
				required
			/>
		</StudioFormView>
	);
}

export default StudioProfileFormView;
