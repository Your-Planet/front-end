import { StyledCentralBox } from "@/components/common/CentralBox/defines/styles";
import { ReactNode } from "react";

type Props = { children: ReactNode };

function CentralBox({ children }: Props) {
	return <StyledCentralBox>{children}</StyledCentralBox>;
}

export default CentralBox;
