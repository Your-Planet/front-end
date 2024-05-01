"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import DynamicInstagramPortfolios from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/DynamicInstagramPortfolios";
import InstagramUserNameTextField from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstagramUserNameTextField";
import {
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { Portfolio, StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import useMutationPostProfile from "@/hooks/queries/studio/useMutationPostProfile";
import { getMaxLengthRule, getMinLengthRule } from "@/utils/react-hook-form/rule";
import { FormHelperText, FormLabel, Grid, Stack } from "@mui/material";
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
			portfolios: [DEFAULT_PORTFOLIO],
		},
	});

	const {
		handleSubmit,
		getValues,
		setError,
		clearErrors,
		formState: { errors },
	} = form;

	const { mutateAsync: mutatePostProfile } = useMutationPostProfile({});

	const handleFormSubmit: FormEventHandler = handleSubmit(async (data) => {
		const categoryToCategories = (category: Record<InstatoonCategoryType, boolean>): InstatoonCategoryType[] => {
			return Object.entries(category)
				.filter(([categoryType, checked]) => checked)
				.map(([categoryType]) => categoryType as InstatoonCategoryType);
		};

		const portfoliosToPortfolioIds = (portfolios: Portfolio[]) => {
			return portfolios.map(({ id }) => id);
		};

		try {
			const { category, portfolios, ...restData } = data;

			await mutatePostProfile({
				...restData,
				categories: categoryToCategories(category),
				portfolioIds: portfoliosToPortfolioIds(portfolios),
			});

			// TODO @김현규 성공 처리
		} catch (e) {
			// TODO @김현규 예외 처리
			console.log(e);
		}
	});

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
			<InstagramUserNameTextField />

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

			<DynamicInstagramPortfolios />
		</StudioFormView>
	);
}

export default StudioProfileFormView;
