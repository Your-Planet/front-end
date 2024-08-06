import {
	StyledBox,
	StyledLink,
} from "@/components/common/layout/Header/components/Gnb/components/GnbLink/defines/styles";
import { PageAttributes } from "@/defines/ia/types";
import { getIaPath } from "@/utils/ia";
import { usePathname } from "next/navigation";

export interface GnbLinkProps {
	page: PageAttributes;
	exception?: PageAttributes[];
}

function GnbLink(props: GnbLinkProps) {
	const { page, exception } = props;

	const { label } = page;

	const href = getIaPath(page);
	const pathname = usePathname();
	const selected = pathname === href;
	const exceptionSelected = exception
		? exception.reduce((acc, cur) => (getIaPath(cur) === pathname ? true : acc || false), false)
		: false;

	return (
		<StyledBox selected={selected || exceptionSelected}>
			<StyledLink selected={selected || exceptionSelected} href={href}>
				{label}
			</StyledLink>
		</StyledBox>
	);
}

export default GnbLink;
