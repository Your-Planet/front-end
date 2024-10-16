"use client";

import ProjectRequestFormProvider from "@/components/project/ProjectRequestFormView/providers/ProjectRequestFormProvider";
import { ReactNode } from "react";

function RequestLayout({ children }: { children: ReactNode }) {
	return <ProjectRequestFormProvider>{children}</ProjectRequestFormProvider>;
}

export default RequestLayout;
