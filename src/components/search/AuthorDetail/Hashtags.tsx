import { Box, Link, Typography } from "@mui/material";

type Props = {
	hashtags: Array<string>;
};

function Hashtags(props: Props) {
	const { hashtags } = props;

	return (
		<Box className="flex">
			{hashtags.map((hashtag, index) => (
				<Link href={`https://www.instagram.com/explore/tags/${hashtag}`} target="_blank" key={hashtag}>
					<Typography className={`${index ? "ml-2" : ""}`} variant="body2">
						{`#${hashtag}`}
					</Typography>
				</Link>
			))}
		</Box>
	);
}

export default Hashtags;
