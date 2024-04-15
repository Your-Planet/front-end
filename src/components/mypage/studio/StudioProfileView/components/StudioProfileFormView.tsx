import { FormProvider, useForm } from "react-hook-form";

export interface StudioProfileFormViewProps {}

function StudioProfileFormView(props: StudioProfileFormViewProps) {
	const {} = props;

	const form = useForm({});

	return (
		<FormProvider {...form}>
			<form></form>
		</FormProvider>
	);
}

export default StudioProfileFormView;
