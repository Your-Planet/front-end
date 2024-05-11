import StudioProfileLoading from "@/components/mypage/studio/StudioProfileView/components/StudioProfileLoading";
import { Box } from "@mui/material";

export interface LoadingProps {}

function Loading(props: LoadingProps) {
	const {} = props;

	return (
		<Box
			sx={{
				flex: "auto",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<StudioProfileLoading />
		</Box>
	);
}

export default Loading;
