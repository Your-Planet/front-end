import ReactHookForm from "@/components/common/ReactHookForm";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
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
		getValues,
		setError,
		clearErrors,
		formState: { errors },
		register,
		trigger,
	} = useFormContext<StudioProfileForm>();

	const getError = (category: Record<InstatoonCategoryType, boolean>) => {};

	register("category", {
		validate: (category) => {
			console.log(category);
			return "asdfsadf";
		},
	});

	const handleChangeCategory = () => {
		trigger("category");
		// const category = getValues("category");
		// const { length } = Object.values(category).filter(Boolean);
		//
		// if (length < STUDIO_PROFILE_FORM_LENGTH.category.min) {
		// 	setError("category", {
		// 		type: "min",
		// 		message: "인스타툰 카테고리를 1개 이상 선택해주세요.",
		// 	});
		// 	return;
		// }
		//
		// if (length > STUDIO_PROFILE_FORM_LENGTH.category.max) {
		// 	setError("category", {
		// 		type: "max",
		// 		message: "인스타툰 카테고리는 최대 5개까지 선택 가능합니다.",
		// 	});
		// 	return;
		// }
		// if (errors.category) {
		// 	clearErrors("category");
		// }
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
				<FormHelperText error>{errors?.category?.message ?? " "}</FormHelperText>
			</Stack>
		</>
	);
}

export default InstatoonCategoryCheckboxGroup;
