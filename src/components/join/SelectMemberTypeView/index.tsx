"use client";

import H2 from "@/components/common/text/H2";
import { IA } from "@/defines/ia/constants";
import { labelByMemberForJoin } from "@/defines/member/constants";
import { MemberType } from "@/defines/member/types";
import { getIaPath } from "@/utils/ia";
import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/navigation";

export interface SelectUserTypeViewProps {}

function SelectUserTypeView(props: SelectUserTypeViewProps) {
	const {} = props;

	const router = useRouter();

	const handleClick = (memberType: MemberType) => {
		const type = memberType.toLocaleLowerCase();

		router.push(`${getIaPath(IA.terms)}/?type=${type}`);
	};

	return (
		<div className="flex flex-col gap-12 w-96 mx-auto my-auto py-28">
			<H2>가입 유형 선택</H2>
			<ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
				{Object.entries(labelByMemberForJoin).map(([key, value]) => (
					<Button key={key} variant="outlined" fullWidth onClick={() => handleClick(key as MemberType)} size="large">
						{value}
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}

export default SelectUserTypeView;
