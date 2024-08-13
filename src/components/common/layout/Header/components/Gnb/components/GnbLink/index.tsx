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

const isStartWithPath = (path: string, target: string) => {
	const filteredPath = path.split("/").filter((p) => p);
	const filteredTarget = target.split("/").filter((t) => t);

	return filteredPath[0] === filteredTarget[0];
};

function GnbLink(props: GnbLinkProps) {
	const { page } = props;

	const { label } = page;

	const href = getIaPath(page);
	const pathname = usePathname();
	const selected = isStartWithPath(href, pathname);

	return (
		<StyledBox selected={selected}>
			<StyledLink selected={selected} href={href}>
				{label}
			</StyledLink>
		</StyledBox>
	);
}

export default GnbLink;
