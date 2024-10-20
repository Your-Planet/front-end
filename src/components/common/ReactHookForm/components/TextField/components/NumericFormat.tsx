import { forwardRef } from "react";
import { NumberFormatValues, NumericFormat, NumericFormatProps } from "react-number-format";

export interface NumericProps {
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
}

export const NumericFormatInput = forwardRef<NumericFormatProps, NumericProps>(
	function NumericFormatCustom(props, ref) {
		const { onChange, name, ...other } = props;
		const handleValueChange = (values: NumberFormatValues) => {
			const { value } = values;

			onChange({
				target: {
					name,
					value: Number(value).toString(),
				},
			});
		};

		return (
			<NumericFormat
				{...other}
				getInputRef={ref}
				onValueChange={handleValueChange}
				inputMode="decimal"
				thousandSeparator
				allowNegative={false}
				placeholder="0"
				value=""
			/>
		);
	},
);
