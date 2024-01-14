import { Box, Link, Typography } from "@mui/material";

type Props = {
	instagramId: string;
};

function AuthorInstagramId(props: Props) {
	const { instagramId } = props;

	return (
		<Box>
			<Typography className="font-bold" variant="h6">
				<Link href={`https://www.instagram.com/${instagramId}`} rel="noopener noreferrer" underline="hover">
					{`@${instagramId}`}
				</Link>
			</Typography>
		</Box>
	);
}

export default AuthorInstagramId;
