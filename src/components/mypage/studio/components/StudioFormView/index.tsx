"use client";

import H3 from "@/components/common/text/H3";
import { StyledStudioForm } from "@/components/mypage/studio/components/StudioFormView/defines/styles";
import { FormEventHandler, ReactNode } from "react";
import { FieldValues } from "react-hook-form";

interface StudioFormViewProps<TFieldValues extends FieldValues> {
	title: string;
	onSubmit: FormEventHandler;
	children: ReactNode | ReactNode[];
}

function StudioFormView<TFieldValues extends FieldValues>(props: StudioFormViewProps<TFieldValues>) {
	const { title, onSubmit, children } = props;

	return (
		<>
			<H3>{title}</H3>
			<StyledStudioForm onSubmit={onSubmit}>{children}</StyledStudioForm>
		</>
	);
}

export default StudioFormView;
