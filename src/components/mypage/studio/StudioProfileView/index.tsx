"use client";

import StudioProfileFormView from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView";
import StudioProfilePreview from "@/components/mypage/studio/StudioProfileView/components/StudioProfilePreview";
import { DEFAULT_CATEGORY, DEFAULT_PORTFOLIO } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { STUDIO_PROFILE_GAP, STUDIO_VIEW_PADDING } from "@/components/mypage/studio/defines/constants";
import { Box } from "@mui/material";
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
		<Box
			sx={{
				padding: `${STUDIO_VIEW_PADDING.vertical}px ${STUDIO_VIEW_PADDING.horizontal}px`,
				display: "flex",
				gap: `${STUDIO_PROFILE_GAP}px`,
			}}
		>
			<FormProvider {...form}>
				<StudioProfileFormView />
				<StudioProfilePreview />
			</FormProvider>
		</Box>
	);
}

export default StudioProfileView;
