"use client";

import { Button, ButtonGroup } from "@mui/material";
import { MemberType } from "@/defines/member/types";
import { labelByMemberForRegister } from "@/defines/member/constants";
import { useRouter } from "next/navigation";
import H2 from "@/components/common/text/H2";

export interface SelectUserTypeViewProps {}

function SelectUserTypeView(props: SelectUserTypeViewProps) {
	const {} = props;

	const router = useRouter();

	const getHandleClick = (memberType: MemberType) => () => router.push(`register/${memberType.toLowerCase()}`);

	return (
		<div className="flex flex-col gap-12 w-96 mx-auto my-auto py-28">
			<H2>가입 유형 선택</H2>
			<ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
				{Object.entries(labelByMemberForRegister).map(([key, value]) => (
					<Button key={key} variant="outlined" fullWidth onClick={getHandleClick(key as MemberType)} size="large">
						{value}
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}

export default SelectUserTypeView;
