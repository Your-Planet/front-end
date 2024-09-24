"use client";

import ProjectRequestFormProvider from "@/components/project/ProjectRequestFormView/providers/ProjectRequestFormProvider";
import { ReactNode } from "react";

function CreatorsLayout({ children }: { children: ReactNode }) {
	return <ProjectRequestFormProvider>{children}</ProjectRequestFormProvider>;
}

export default CreatorsLayout;
