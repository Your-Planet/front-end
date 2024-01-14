import { Box, Typography } from "@mui/material";

type Props = {
	introduction: string;
};

function AuthorIntroduction(props: Props) {
	const { introduction } = props;

	return (
		<Box className="flex items-center w-full h-32">
			<Typography variant="body1" paragraph sx={{ whiteSpace: "pre-wrap" }}>
				{introduction}
			</Typography>
		</Box>
	);
}

export default AuthorIntroduction;
