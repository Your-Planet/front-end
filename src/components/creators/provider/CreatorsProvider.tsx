"use client";

import { GetCreatorsRequest, GetCreatorsResponse } from "@/apis/studio/models/creators";
import { useSearchCreators } from "@/components/creators/hooks/useSearchCreators";
import { ReactNode, createContext, useContext } from "react";

interface SearchContextProps {
	creatorsResponse?: GetCreatorsResponse;
	handleClickSearch: (params: GetCreatorsRequest) => Promise<void>;
	isLoading: boolean;
}

interface CreatorsProviderProps {
	children: ReactNode;
}

export const CreatorsContext = createContext<SearchContextProps | undefined>(undefined);

export const CreatorsProvider = ({ children }: CreatorsProviderProps) => {
	const { creatorsResponse, handleClickSearch, isLoading } = useSearchCreators();

	return (
		<CreatorsContext.Provider value={{ creatorsResponse, handleClickSearch, isLoading }}>
			{children}
		</CreatorsContext.Provider>
	);
};

export const useCreatorsContext = (): SearchContextProps => {
	const context = useContext(CreatorsContext);

	if (context === undefined) {
		throw new Error("useCreatorsContext must be used within a CreatorsProvider");
	}

	return context;
};
