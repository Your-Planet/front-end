import { AuthorCardButtonEvent, AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { Button, Skeleton, Tooltip } from "@mui/material";

type AuthorCardProjectButtonProps = AuthorCardFieldProps<AuthorCardButtonEvent>;

function AuthorCardProjectButton(props: AuthorCardProjectButtonProps) {
	const {
		value: { tooltip, onClick },
	} = props;

	const isLoading = useAuthorCardLoadingContext();

	return isLoading ? (
		<Skeleton variant="rounded" height={"36.5px"} />
	) : (
		<Tooltip title={tooltip} placement="bottom">
			<Button fullWidth variant="contained" onClick={onClick}>
				프로젝트 의뢰하기
			</Button>
		</Tooltip>
	);
}

export default AuthorCardProjectButton;
