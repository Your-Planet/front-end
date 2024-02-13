import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	name: string;
};

function GenreCheckBox(props: Props) {
	const { label, onChange, checked, name } = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event);
	};

	return (
		<FormControlLabel
			className="w-fit"
			label={label}
			control={<Checkbox onChange={handleChange} size="small" checked={checked} name={name} />}
		/>
	);
}

export default GenreCheckBox;
