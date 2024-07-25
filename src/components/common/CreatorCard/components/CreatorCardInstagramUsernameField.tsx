import { CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { blue } from "@mui/material/colors";

export type CreatorCardInstagramUsernameFieldProps = CreatorCardFieldProps<string>;

function CreatorCardInstagramUsernameField(props: CreatorCardInstagramUsernameFieldProps) {
	const { value } = props;

	const isLoading = useCreatorCardLoadingContext();

	return (
		<Box
			sx={{
				fontSize: "12px",
				color: blue[500],
				lineHeight: "200%",
			}}
		>
			{isLoading ? <Skeleton variant="text" sx={{ fontSize: 12 }} width={100} /> : value}
		</Box>
	);
}

export default CreatorCardInstagramUsernameField;
