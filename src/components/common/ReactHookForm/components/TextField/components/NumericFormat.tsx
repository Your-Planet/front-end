import { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export interface NumericProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const NumericFormatInput = forwardRef<NumericFormatProps, NumericProps>(
	function NumericFormatCustom(props, ref) {
		const { onChange, name, ...other } = props;

		return (
			<NumericFormat
				{...other}
				getInputRef={ref}
				onValueChange={(values) => {
					onChange({
						target: {
							name,
							value: values.value,
						},
					});
				}}
				inputMode="decimal"
				thousandSeparator
				valueIsNumericString
			/>
		);
	},
);
