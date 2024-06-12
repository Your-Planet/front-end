"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import StudioProfileFormLoading from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormLoading";
import { DynamicInstagramPortfolios } from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/DynamicInstagramPortfolios";
import InstagramUserNameTextField from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstagramUserNameTextField";
import InstatoonCategoryCheckboxGroup from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView/components/InstatoonCategoryCheckboxGroup";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import useLoadStudioProfile from "@/components/mypage/studio/StudioProfileView/hooks/useLoadStudioProfile";
import useSaveStudioProfile from "@/components/mypage/studio/StudioProfileView/hooks/useSaveStudioProfile";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { getMaxLengthRule, getMinLengthRule } from "@/utils/react-hook-form/rule";
import { LoadingButton } from "@mui/lab";

function StudioProfileFormView() {
	const { TextField } = ReactHookForm<StudioProfileForm>();

	const { isLoading } = useLoadStudioProfile();

	const { isSaving, handleStudioProfileFormSubmit } = useSaveStudioProfile();

	if (isLoading) {
		return <StudioProfileFormLoading />;
	}

	return (
		<StudioFormView title={"프로필 설정"} onSubmit={handleStudioProfileFormSubmit}>
			<InstagramUserNameTextField label="인스타그램 계정" />

			<TextField
				formName="name"
				label="인스타툰 네임"
				placeholder="사람들이 알아보기 쉬운 인지도 있는 이름을 추천해요."
				required
				rules={getMaxLengthRule(STUDIO_PROFILE_FORM_LENGTH.name.max)}
			/>

			<TextField
				formName="description"
				label="인스타툰 소개"
				placeholder={`자신을 자유롭게 소개해 주세요. 최대 ${STUDIO_PROFILE_FORM_LENGTH.description.max}자까지 입력 가능해요.`}
				required
				multiline
				rows={10}
				rules={{
					...getMinLengthRule(STUDIO_PROFILE_FORM_LENGTH.description.min),
					...getMaxLengthRule(STUDIO_PROFILE_FORM_LENGTH.description.max),
				}}
			/>

			<InstatoonCategoryCheckboxGroup label="인스타툰 카테고리" />

			<DynamicInstagramPortfolios label="포트폴리오(인스타그램 게시글) 링크" />

			<LoadingButton type="submit" variant="contained" size="large" loading={isSaving}>
				다음
			</LoadingButton>
		</StudioFormView>
	);
}

export default StudioProfileFormView;
