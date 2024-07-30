import StudioProfileFormLoading from "@/components/studio/StudioProfileView/components/StudioProfileFormLoading";
import { Box } from "@mui/material";

function Loading() {
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
			<StudioProfileFormLoading />
		</Box>
	);
}

export default Loading;
