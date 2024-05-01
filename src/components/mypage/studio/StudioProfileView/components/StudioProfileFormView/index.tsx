"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import DynamicInstagramPortfolios from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/DynamicInstagramPortfolios";
import InstagramUserNameTextField from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstagramUserNameTextField";
import InstatoonCategoryCheckboxGroup from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstatoonCategoryCheckboxGroup";
import {
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { Portfolio, StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import useMutationPostProfile from "@/hooks/queries/studio/useMutationPostProfile";
import { getMaxLengthRule, getMinLengthRule } from "@/utils/react-hook-form/rule";
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

	const { handleSubmit } = form;

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

			<InstatoonCategoryCheckboxGroup label="인스타툰 카테고리" />

			<DynamicInstagramPortfolios label="포트폴리오 링크" />
		</StudioFormView>
	);
}

export default StudioProfileFormView;
