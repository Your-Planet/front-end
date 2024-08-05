import { CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

type CreatorCardNameFieldProps = CreatorCardFieldProps<string>;

function CreatorCardNameField(props: CreatorCardNameFieldProps) {
	const { value } = props;

	const isLoading = useCreatorCardLoadingContext();

	return (
		<Box
			sx={{
				fontSize: "18px",
				fontWeight: "bold",
				color: grey[900],
				lineHeight: 1.4,
			}}
		>
			{isLoading ? <Skeleton variant="text" sx={{ fontSize: 22 }} width={200} /> : value}
		</Box>
	);
}

export default CreatorCardNameField;
