import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { blue } from "@mui/material/colors";

export type AuthorCardInstagramUsernameFieldProps = AuthorCardFieldProps<string>;

function AuthorCardInstagramUsernameField(props: AuthorCardInstagramUsernameFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

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

export default AuthorCardInstagramUsernameField;
