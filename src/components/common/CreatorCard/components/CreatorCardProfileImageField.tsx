import { CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { ReactNode } from "react";

type CreatorCardProfileImageFieldProps = CreatorCardFieldProps<ReactNode>;

function CreatorCardProfileImageField(props: CreatorCardProfileImageFieldProps) {
	const { value } = props;

	const isLoading = useCreatorCardLoadingContext();

	return (
		<Box sx={{ width: "80px", height: "80px" }}>
			{isLoading ? <Skeleton variant="rounded" width="100%" height="100%" /> : value}
		</Box>
	);
}

export default CreatorCardProfileImageField;
