"use client";

import React, { createContext, ReactNode } from "react";

export const AuthorCardLoadingContext = createContext<boolean>(false);

export const useAuthorCardLoadingContext = () => React.useContext(AuthorCardLoadingContext);

export function AuthorCardLoadingProvider({ isLoading, children }: { isLoading: boolean; children: ReactNode }) {
	return <AuthorCardLoadingContext.Provider value={isLoading}>{children}</AuthorCardLoadingContext.Provider>;
}
