import { AuthorCardButtonEvent, AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Button, Skeleton, Tooltip } from "@mui/material";

type AuthorCardDetailButtonProps = AuthorCardFieldProps<AuthorCardButtonEvent>;

function AuthorCardDetailButton(props: AuthorCardDetailButtonProps) {
	const {
		value: { tooltip, onClick },
	} = props;

	const isLoading = useAuthorCardLoadingContext();

	return isLoading ? (
		<Skeleton variant="rounded" height={"36.5px"} />
	) : (
		<Tooltip title={tooltip} placement="top">
			<Button fullWidth variant="outlined" onClick={onClick}>
				자세히 보기
			</Button>
		</Tooltip>
	);
}

export default AuthorCardDetailButton;
