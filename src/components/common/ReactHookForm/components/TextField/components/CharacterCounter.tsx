import { ReactHookFormTextFieldProps } from "@/components/common/ReactHookForm/components/TextField";
import { InputAdornment, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { FieldValues } from "react-hook-form";

export interface CharacterCounterProps extends Pick<ReactHookFormTextFieldProps<FieldValues>, "rules"> {
	length: number;
	hasError: boolean;
}

function CharacterCounter(props: CharacterCounterProps) {
	const { rules, length, hasError } = props;

	const maxValue = (() => {
		if (!rules?.maxLength) return undefined;
		return typeof rules.maxLength === "number" ? rules.maxLength : rules.maxLength.value;
	})();

	const value = maxValue ? `${length} / ${maxValue}` : length;

	return (
		<InputAdornment position="end" sx={{ position: "absolute", bottom: "-13px", right: "18px" }}>
			<Typography variant="caption" color={hasError ? red[700] : grey[700]}>
				{value}
			</Typography>
		</InputAdornment>
	);
}

export default CharacterCounter;
