import {
	StyledBox,
	StyledLink,
} from "@/components/common/layout/Header/components/Gnb/components/GnbLink/defines/styles";
import { PageAttributes } from "@/defines/ia/types";
import { getIaPath } from "@/utils/ia";
import { usePathname } from "next/navigation";

export interface GnbLinkProps {
	page: PageAttributes;
}

function GnbLink(props: GnbLinkProps) {
	const { page } = props;

	const { label } = page;

	const href = getIaPath(page) ?? "#";
	const pathname = usePathname();
	const selected = pathname === href;

	return (
		<StyledBox selected={selected}>
			<StyledLink selected={selected} href={href}>
				{label}
			</StyledLink>
		</StyledBox>
	);
}

export default GnbLink;
