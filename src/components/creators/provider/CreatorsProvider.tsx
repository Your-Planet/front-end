"use client";

import { GetCreatorsRequest, GetCreatorsResponse } from "@/apis/studio/models/creators";
import useQueryGetCreators from "@/hooks/queries/studio/useQueryGetCreators";
import { ReactNode, createContext, useCallback, useContext, useState } from "react";

interface SearchContextProps {
	creatorsData?: GetCreatorsResponse;
	handleClickSearch: (params: GetCreatorsRequest) => void;
	isLoading: boolean;
}

interface CreatorsProviderProps {
	children: ReactNode;
	initialParams: GetCreatorsRequest;
}

export const CreatorsContext = createContext<SearchContextProps | undefined>(undefined);

export const CreatorsProvider = ({ children, initialParams }: CreatorsProviderProps) => {
	const [params, setParams] = useState(initialParams);

	const { data: { data: creators } = {}, isLoading, refetch } = useQueryGetCreators({ req: params });

	const handleClickSearch = useCallback(
		(params: GetCreatorsRequest) => {
			setParams(params);
			refetch();
		},
		[refetch],
	);

	return (
		<CreatorsContext.Provider value={{ creatorsData: creators, handleClickSearch, isLoading }}>
			{children}
		</CreatorsContext.Provider>
	);
};

export const useCreatorsContext = (): SearchContextProps => {
	const context = useContext(CreatorsContext);

	// Defensive code
	if (context === undefined) {
		throw new Error("useCreatorsContext must be used within a CreatorsProvider");
	}

	return context;
};
