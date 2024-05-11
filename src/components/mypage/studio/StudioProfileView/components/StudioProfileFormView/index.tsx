"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import DynamicInstagramPortfolios from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/DynamicInstagramPortfolios";
import InstagramUserNameTextField from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstagramUserNameTextField";
import InstatoonCategoryCheckboxGroup from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstatoonCategoryCheckboxGroup";
import useLoadStudioProfile from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/hooks/useLoadStudioProfile";
import useSaveStudioProfile from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/hooks/useSaveStudioProfile";
import {
	DEFAULT_CATEGORY,
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { getMaxLengthRule, getMinLengthRule } from "@/utils/react-hook-form/rule";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";

function StudioProfileFormView() {
	const { TextField } = ReactHookForm<StudioProfileForm>();

	const form = useForm<StudioProfileForm>({
		mode: "all",
		defaultValues: {
			name: "",
			description: "",
			category: DEFAULT_CATEGORY,
			portfolios: [DEFAULT_PORTFOLIO],
		},
	});

	useLoadStudioProfile({
		form,
	});

	const { isSaving, handleStudioProfileFormSubmit } = useSaveStudioProfile({
		form,
	});

	return (
		<StudioFormView title={"프로필 설정"} useFormReturn={form} onSubmit={handleStudioProfileFormSubmit}>
			<InstagramUserNameTextField label="인스타그램 계정" />

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

			<LoadingButton type="submit" variant="contained" size="large" loading={isSaving}>
				다음
			</LoadingButton>
		</StudioFormView>
	);
}

export default StudioProfileFormView;
