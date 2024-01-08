import { styled } from "@mui/system";
import { HEADER_HEIGHT } from "@/components/common/layout/Header/defines/constants";
import { FOOTER_HEIGHT } from "@/components/common/layout/Footer/defines";

export const StyledMain = styled("main")({
	margin: `-${HEADER_HEIGHT}px 0 -${FOOTER_HEIGHT}px`,
	padding: `${HEADER_HEIGHT}px 0 ${FOOTER_HEIGHT}px`,
	minHeight: "100%",
	display: "flex",
	flexDirection: "column",
});
