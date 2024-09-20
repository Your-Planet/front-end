import { MenuItem } from "@mui/material";

// TODO @나은찬, need to refactor, type? count?
type Props = {
	count: number;
	endAdornment?: string;
};

function ProjectMenuItem(props: Props) {
	const { count, endAdornment } = props;

	return (
		<>
			{Array.from({ length: count }, (_, i) => (
				<MenuItem key={i} value={i}>
					{i === 0 ? "추가 안함" : `${i}${endAdornment}`}
				</MenuItem>
			))}
		</>
	);
}

export default ProjectMenuItem;
