"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { FormHelperText, FormLabel, Grid, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";

export interface InstatoonCategoryCheckboxGroupProps {
	label: string;
}

function InstatoonCategoryCheckboxGroup(props: InstatoonCategoryCheckboxGroupProps) {
	const { label } = props;

	const { Checkbox } = ReactHookForm<StudioProfileForm>();

	const {
		formState: { errors },
		register,
		trigger,
	} = useFormContext<StudioProfileForm>();

	register("category", {
		validate: (category) => {
			const { length } = Object.values(category).filter(Boolean);

			if (length < STUDIO_PROFILE_FORM_LENGTH.category.min) {
				return `인스타툰 카테고리를 ${STUDIO_PROFILE_FORM_LENGTH.category.min}개 이상 선택해주세요.`;
			}

			if (length > STUDIO_PROFILE_FORM_LENGTH.category.max) {
				return `인스타툰 카테고리는 최대 ${STUDIO_PROFILE_FORM_LENGTH.category.max}개까지 선택 가능합니다.`;
			}

			return true;
		},
	});

	const handleChangeCategory = () => {
		trigger("category");
	};

	return (
		<>
			<Stack>
				<FormLabel required>{label}</FormLabel>
				<Grid container spacing={1}>
					{Object.entries(INSTATOON_CATEGORY_NAME_BY_TYPE).map(([instatoonCategoryType, label]) => (
						<Grid item xs={3} key={instatoonCategoryType}>
							<Checkbox
								formName={`category.${instatoonCategoryType as InstatoonCategoryType}`}
								label={label}
								hideErrorMessage
								rules={{
									onChange: handleChangeCategory,
								}}
							/>
						</Grid>
					))}
				</Grid>
				<FormHelperText sx={{ margin: "3px 14px 0" }} error>
					{errors?.category?.message ?? " "}
				</FormHelperText>
			</Stack>
		</>
	);
}

export default InstatoonCategoryCheckboxGroup;
