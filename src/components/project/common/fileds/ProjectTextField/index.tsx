import { TextField } from "@mui/material";

type Props = {
	label: string;
	text: string;
};

function ProjectTextField(props: Props) {
	const { label, text } = props;

	return <TextField label={label} defaultValue={text} InputProps={{ readOnly: true }} />;
}

export default ProjectTextField;
