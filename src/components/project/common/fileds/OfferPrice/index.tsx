import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { isNumber } from "@/utils/string";
import { InputAdornment } from "@mui/material";

function OfferPrice(props: ProjectFormFieldCommonProps) {
	const { formName, required } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	return (
		<TextField
			formName={formName}
			label="예산"
			validator={isNumber}
			InputProps={{
				endAdornment: <InputAdornment position="end">원</InputAdornment>,
			}}
			required={required}
			numericFormat
		/>
	);
}

export default OfferPrice;
