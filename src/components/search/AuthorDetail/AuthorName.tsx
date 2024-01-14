import { Box, Typography } from "@mui/material";

type Props = {
	authorName: string;
};

function AuthorName(props: Props) {
	const { authorName } = props;

	return (
		<Box className="flex">
			<Typography className="font-bold" variant="h5">
				{authorName}
			</Typography>
		</Box>
	);
}

export default AuthorName;
