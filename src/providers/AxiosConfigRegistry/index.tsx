"use client";

import { AXIOS_INSTANCE } from "@/apis";
import useExternalAxiosConfig from "@/providers/AxiosConfigRegistry/hooks/useExternalAxiosConfig";
import useInternalAxiosConfig from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig";
import { ReactNode } from "react";

interface AxiosConfigRegistryProps {
	children: ReactNode | ReactNode[];
}

const internalAxiosInstances = [AXIOS_INSTANCE.yourPlanet];
const externalAxiosInstances = [AXIOS_INSTANCE.instagramApi, AXIOS_INSTANCE.instagramGraph];

function AxiosConfigRegistry(props: AxiosConfigRegistryProps) {
	const { children } = props;

	useInternalAxiosConfig(internalAxiosInstances);
	useExternalAxiosConfig(externalAxiosInstances);

	return <>{children}</>;
}

export default AxiosConfigRegistry;
