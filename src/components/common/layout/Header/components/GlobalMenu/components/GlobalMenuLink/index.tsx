import { StyledHeaderLink } from "@/components/common/layout/Header/components/GlobalMenu/components/GlobalMenuLink/defines/styles";
import { PageAttributes } from "@/defines/ia/types";
import { getIaPath } from "@/utils/ia";

export interface GnbMenuLinkProps {
	page: PageAttributes;
}

function GlobalMenuLink(props: GnbMenuLinkProps) {
	const { page } = props;

	const { label } = page;

	const href = getIaPath(page);

	return <StyledHeaderLink href={href}>{label}</StyledHeaderLink>;
}

export default GlobalMenuLink;
