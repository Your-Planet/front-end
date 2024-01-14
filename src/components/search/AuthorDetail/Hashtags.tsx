import { Box, Typography } from "@mui/material";

type Props = {
	hashtags: Array<string>;
};

function Hashtags(props: Props) {
	const { hashtags } = props;

	return (
		<Box className="flex">
			{hashtags.map((hashtag, index) => (
				<Typography className={`${index ? "ml-2" : ""}`} variant="body2" key={hashtag}>
					{`#${hashtag}`}
				</Typography>
			))}
		</Box>
	);
}

export default Hashtags;
