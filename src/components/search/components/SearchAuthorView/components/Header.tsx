import H2 from "@/components/common/text/H2";
import { Box, Typography } from "@mui/material";

type Props = {};

function Header({}: Props) {
	return (
		<Box display="flex" gap="1rem" flexDirection="column">
			<H2>작가를 만나보세요.</H2>
			<Box>
				<Typography color="GrayText">
					유어플래닛 작가를 통해 여러분의 브랜드는 새로운 이미지를 만나게 됩니다.
				</Typography>
				<Typography color="GrayText">이 곳에서 출발한 협업은 앞으로 펼쳐질 더 큰 이야기의 시작이 될 거에요.</Typography>
			</Box>
		</Box>
	);
}

export default Header;
