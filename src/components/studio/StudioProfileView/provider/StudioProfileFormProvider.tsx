import { DEFAULT_CATEGORY, DEFAULT_PORTFOLIO } from "@/components/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface StudioProfileFormProviderProps {
	children: ReactNode | ReactNode[];
}

function StudioProfileFormProvider(props: StudioProfileFormProviderProps) {
	const { children } = props;

	const form = useForm<StudioProfileForm>({
		mode: "all",
		defaultValues: {
			name: "",
			description: "",
			category: DEFAULT_CATEGORY,
			portfolios: [DEFAULT_PORTFOLIO],
			profileImage: null,
		},
	});

	form.register("profileImage", {
		required: {
			value: true,
			message: "프로필 이미지를 등록해 주세요.",
		},
	});

	return <FormProvider {...form}>{children}</FormProvider>;
}

export default StudioProfileFormProvider;
