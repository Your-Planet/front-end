import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Box, Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

type AuthorCardDescriptionFieldProps = AuthorCardFieldProps<string>;

function AuthorCardDescriptionField(props: AuthorCardDescriptionFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

	return (
		<Box
			sx={{
				whiteSpace: "pre-wrap",
				fontSize: "16px",
				color: grey[700],
				lineHeight: 1.2,
				wordWrap: "break-word",
			}}
		>
			{isLoading ? (
				<>
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={420} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={360} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={390} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={340} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={350} />
				</>
			) : (
				value
			)}
		</Box>
	);
}

export default AuthorCardDescriptionField;
