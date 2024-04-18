"use client";

import H3 from "@/components/common/text/H3";
import { StyledStudioForm } from "@/components/mypage/studio/components/StudioFormView/defines/styles";
import { FormEventHandler, ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

interface StudioFormViewProps<TFieldValues extends FieldValues> {
	title: string;
	useFormReturn: UseFormReturn<TFieldValues>;
	onSubmit: FormEventHandler;
	children: ReactNode | ReactNode[];
}

function StudioFormView<TFieldValues extends FieldValues>(props: StudioFormViewProps<TFieldValues>) {
	const { title, useFormReturn, onSubmit, children } = props;

	return (
		<FormProvider {...useFormReturn}>
			<H3>{title}</H3>
			<StyledStudioForm onSubmit={onSubmit}>{children}</StyledStudioForm>
		</FormProvider>
	);
}

export default StudioFormView;
