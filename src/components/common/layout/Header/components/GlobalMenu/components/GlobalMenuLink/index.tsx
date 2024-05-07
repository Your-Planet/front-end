import { StyledHeaderLink } from "@/components/common/layout/Header/components/GlobalMenu/components/GlobalMenuLink/defines/styles";
import { PageAttributes } from "@/defines/ia/types";
import { getIaPath } from "@/utils/ia";
import { ParsedUrlQuery } from "querystring";

export interface GnbMenuLinkProps {
	page: PageAttributes;
	query?: ParsedUrlQuery;
}

function GlobalMenuLink(props: GnbMenuLinkProps) {
	const { page, query } = props;

	const { label } = page;

	const pathname = getIaPath(page);

	return (
		<StyledHeaderLink
			href={{
				pathname,
				query,
			}}
		>
			{label}
		</StyledHeaderLink>
	);
}

export default GlobalMenuLink;
