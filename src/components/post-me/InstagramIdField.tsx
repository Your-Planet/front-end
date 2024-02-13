import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, TextField, Typography } from "@mui/material";

type Props = {
	instagramId: string;
};

function InstagramIdField(props: Props) {
	const { instagramId } = props;

	return (
		<Box className="flex flex-col w-[50vw]">
			<Box className="flex items-center">
				<Typography>인스타그램 계정</Typography>
				<VerifiedIcon className="text-base ml-1 color-blue" color="primary" />
			</Box>
			<TextField defaultValue={instagramId} margin="normal" size="small" disabled fullWidth />
		</Box>
	);
}

export default InstagramIdField;
