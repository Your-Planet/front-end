import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import EllipsisBox from "@/components/common/EllipsisBox";
import { Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";

type AuthorCardDescriptionFieldProps = AuthorCardFieldProps<string>;

function AuthorCardDescriptionField(props: AuthorCardDescriptionFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

	return (
		<EllipsisBox
			sx={{
				whiteSpace: "pre-wrap",
				fontSize: "16px",
				color: grey[700],
				lineHeight: 1.4,
				wordWrap: "break-word",
				height: "160px",
			}}
			line={7}
		>
			{isLoading ? (
				<>
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={420} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={360} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={390} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={340} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={350} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={380} />
					<Skeleton variant="text" sx={{ fontSize: 16 }} width={310} />
				</>
			) : (
				value
			)}
		</EllipsisBox>
	);
}

export default AuthorCardDescriptionField;
