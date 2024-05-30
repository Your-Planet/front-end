import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

type AuthorCardNameFieldProps = AuthorCardFieldProps<string>;

function AuthorCardNameField(props: AuthorCardNameFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

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

export default AuthorCardNameField;
