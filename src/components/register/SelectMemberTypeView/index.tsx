"use client";

import H2 from "@/components/common/text/H2";
import TermsOfService from "@/components/register/TermsOfService";
import { labelByMemberForRegister } from "@/defines/member/constants";
import { MemberType } from "@/defines/member/types";
import useOpen from "@/hooks/common/useOpen";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

export interface SelectUserTypeViewProps {}

function SelectUserTypeView(props: SelectUserTypeViewProps) {
	const {} = props;

	const { opened, handleOpen, handleClose } = useOpen(false);

	const [selectedMember, setSelectedMember] = useState<MemberType | null>(null);

	const handleClickOpenTos = (memberType: MemberType) => {
		handleOpen();
		setSelectedMember(memberType);
	};

	return (
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
			{opened && <TermsOfService selectedMember={selectedMember} opened={opened} onClose={handleClose} />}
		</div>
	);
}

export default SelectUserTypeView;
