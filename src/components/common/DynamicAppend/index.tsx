"use client";

import DynamicAppendButtonGroup from "@/components/common/DynamicAppend/components/DynamicAppendButtonGroup";
import { FormLabel, Grid, Stack } from "@mui/material";
import { ReactElement } from "react";
import { ArrayPath, FieldArray, FieldArrayPath, FieldValues, useFieldArray, useFormContext } from "react-hook-form";
import { DefaultValues } from "react-hook-form/dist/types/form";

export interface DynamicAppendProps<TFieldValues extends FieldValues> {
	formName: ArrayPath<TFieldValues>;
	label?: string;
	component: (props: DynamicAppendItemProps) => ReactElement;
	defaultValue: DefaultValues<FieldArray<TFieldValues, FieldArrayPath<TFieldValues>>>;
	required?: boolean;
	disabled?: boolean;
	maxCount?: number;
}

export interface DynamicAppendItemProps {
	index: number;
	disabled?: boolean;
}

function DynamicAppend<TFieldValues extends FieldValues>(props: DynamicAppendProps<TFieldValues>) {
	const { formName, label, component, defaultValue, required, disabled, maxCount } = props;

	const { control } = useFormContext<TFieldValues>();

	const { fields, append, remove } = useFieldArray<TFieldValues>({
		control,
		name: formName,
	});

	const getHandleClickAppend = () => () => {
		append(defaultValue as FieldArray<TFieldValues, FieldArrayPath<TFieldValues>>);
	};

	const getHandleClickRemove = (index: number) => () => {
		remove(index);
	};

	const getAppendable = (index: number) => {
		return index === fields.length - 1 && maxCount !== fields.length;
	};

	const removable = fields.length > 1;

	return (
		<Stack>
			{label && <FormLabel required={required}>{label}</FormLabel>}
			<Stack spacing={1} sx={{ marginTop: "6px" }}>
				{fields.map(({ id }, index) => (
					<Grid container key={id} gap={"6px"}>
						<Grid xs>
							{component({
								index,
								disabled,
							})}
						</Grid>

						<Grid width="fit-content" display="flex" flexDirection="column">
							<DynamicAppendButtonGroup
								disabled={Boolean(disabled)}
								appendable={getAppendable(index)}
								removable={removable}
								onClickAppend={getHandleClickAppend()}
								onClickRemove={getHandleClickRemove(index)}
							/>
						</Grid>
					</Grid>
				))}
			</Stack>
		</Stack>
	);
}

export default DynamicAppend;
