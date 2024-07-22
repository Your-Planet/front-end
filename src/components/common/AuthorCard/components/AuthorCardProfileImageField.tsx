import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { ReactNode } from "react";

type AuthorCardProfileImageFieldProps = AuthorCardFieldProps<ReactNode>;

function AuthorCardProfileImageField(props: AuthorCardProfileImageFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

	return (
		<Box sx={{ width: "80px", height: "80px" }}>
			{isLoading ? <Skeleton variant="rounded" width="100%" height="100%" /> : value}
		</Box>
	);
}

export default AuthorCardProfileImageField;
