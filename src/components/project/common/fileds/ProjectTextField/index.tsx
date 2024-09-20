import { TextField } from "@mui/material";

type Props = {
	label: string;
	text?: string;
	defaultCuts?: number;
	additionalCuts?: number;
};

function ProjectTextField(props: Props) {
	const { label, text, defaultCuts = 0, additionalCuts = 0 } = props;
	const defaultValue =
		text ?? `총 ${defaultCuts + additionalCuts}컷 (기본 ${defaultCuts}컷 + 추가 ${additionalCuts}컷)`;

	return <TextField label={label} defaultValue={defaultValue} InputProps={{ readOnly: true }} />;
}

export default ProjectTextField;
