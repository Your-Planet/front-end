"use client";

import H2 from "@/components/common/text/H2";
import { labelByMemberForRegister } from "@/defines/member/constants";
import { MemberType } from "@/defines/member/types";
import { tosOpenContext } from "@/recoil/atoms/TermsOfService";
import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import TermsOfService from "../TermsOfService/index";

export interface SelectUserTypeViewProps {}

function SelectUserTypeView(props: SelectUserTypeViewProps) {
	const {} = props;

	const router = useRouter();
	const [tosOpen, setTosOpen] = useRecoilState<boolean>(tosOpenContext);
	const [selectedMember, setSelectedMember] = useState<MemberType | null>(null);

	const handleClickOpenTos = (memberType: MemberType) => {
		setTosOpen(true);
		setSelectedMember(memberType);
	};

	return (
		<>
			<div className="flex flex-col gap-12 w-96 mx-auto my-auto py-28">
				<H2>가입 유형 선택</H2>
				<ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
					{Object.entries(labelByMemberForRegister).map(([key, value]) => (
						<Button
							key={key}
							variant="outlined"
							fullWidth
							onClick={() => handleClickOpenTos(key as MemberType)}
							size="large"
						>
							{value}
						</Button>
					))}
				</ButtonGroup>
				{tosOpen && <TermsOfService selectedMember={selectedMember} />}
				
			</div>
		</>
	);
}

export default SelectUserTypeView;
