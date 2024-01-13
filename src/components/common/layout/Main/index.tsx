"use client";

import { ReactNode } from "react";
import { StyledMain } from "@/components/common/layout/Main/defines/styles";

export interface MainProps {
	children: ReactNode;
}

function Main(props: MainProps) {
	const { children } = props;

	return <StyledMain>{children}</StyledMain>;
}

export default Main;
