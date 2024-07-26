import { Button } from "@mui/material";

// TODO @김현규 프로젝트 의뢰 페이지로 연결
function RequestProjectButton() {
	return (
		<Button
			sx={{
				marginTop: "24px",
			}}
			variant={"contained"}
			size={"large"}
			fullWidth
		>
			프로젝트 의뢰하기
		</Button>
	);
}

export default RequestProjectButton;
