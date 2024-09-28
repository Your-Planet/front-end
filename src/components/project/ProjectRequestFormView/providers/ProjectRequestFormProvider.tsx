import { ProjectRequestForm } from "@/defines/forms/project/types";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface ProjectRequestFormProviderProps {
	children: ReactNode | ReactNode[];
}

function ProjectRequestFormProvider(props: ProjectRequestFormProviderProps) {
	const { children } = props;

	const form = useForm<ProjectRequestForm>({
		mode: "all",
		defaultValues: {
			additionalPanel: {
				count: 0,
				isNegotiable: false,
			},
			additionalModification: {
				count: 0,
			},
			originFile: {
				demandType: "NOT_DEMANDED",
			},
			refinement: {
				demandType: "NOT_DEMANDED",
			},
			postDurationExtension: {
				months: 0,
			},
			postStartDate: null,
			postStartDates: [],
			dueDate: null,
			brandName: "",
			campaignDescription: "",
			referenceUrls: [],
			referenceFiles: [],
			offerPrice: 0,
			message: "",
			sponsorName: "",
			finalCuts: 0,
		},
	});

	return <FormProvider {...form}>{children}</FormProvider>;
}

export default ProjectRequestFormProvider;
