"use client";

import PageContainer from "@/components/common/PageContainer";
import StudioProfileFormView from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView";
import StudioProfilePreview from "@/components/mypage/studio/StudioProfileView/components/StudioProfilePreview";
import { DEFAULT_CATEGORY, DEFAULT_PORTFOLIO } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { FormProvider, useForm } from "react-hook-form";

interface StudioProfileViewProps {}

function StudioProfileView(props: StudioProfileViewProps) {
	const {} = props;

	const form = useForm<StudioProfileForm>({
		mode: "all",
		defaultValues: {
			name: "",
			description: "",
			category: DEFAULT_CATEGORY,
			portfolios: [DEFAULT_PORTFOLIO],
		},
	});

	return (
		<section>
			<FormProvider {...form}>
				<PageContainer sx={{ padding: "32px 20px" }}>
					<StudioProfileFormView />
					<StudioProfilePreview />
				</PageContainer>
			</FormProvider>
		</section>
	);
}

export default StudioProfileView;
