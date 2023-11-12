"use client";

import { Button, ButtonGroup } from "@mui/material";
import { UserType } from "@/defines/user/types";
import { labelByUser } from "@/defines/user/constants";
import { useRouter } from "next/navigation";

export interface SelectUserTypeViewProps {}

function SelectUserTypeView(props: SelectUserTypeViewProps) {
	const {} = props;

	const router = useRouter();

	// TODO @김현규 백엔드 타입 생성 후 수정
	const getHandleClick = (userType: UserType) => () => router.push(`${userType.toLowerCase()}`);

	// TODO @김현규 스타일 적용 필요
	return (
		<>
			<div>
				<h2>가입 유형 선택</h2>
				<ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
					{Object.entries(labelByUser).map(([key, value]) => (
						<Button variant={"outlined"} fullWidth onClick={getHandleClick(key as UserType)}>
							{value}
						</Button>
					))}
				</ButtonGroup>
			</div>
		</>
	);
}

export default SelectUserTypeView;
