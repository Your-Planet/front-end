"use client";

import React, { createContext, ReactNode } from "react";

export const CreatorCardLoadingContext = createContext<boolean>(false);

export const useCreatorCardLoadingContext = () => React.useContext(CreatorCardLoadingContext);

export function CreatorCardLoadingProvider({ isLoading, children }: { isLoading: boolean; children: ReactNode }) {
	return <CreatorCardLoadingContext.Provider value={isLoading}>{children}</CreatorCardLoadingContext.Provider>;
}
