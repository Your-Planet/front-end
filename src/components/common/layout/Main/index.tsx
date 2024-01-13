"use client";

import { StyledMain } from "@/components/common/layout/Main/defines/styles";
import { ReactNode } from "react";

export interface MainProps {
	children: ReactNode;
}

function Main(props: MainProps) {
	const { children } = props;

	return <StyledMain>{children}</StyledMain>;
}

export default Main;
