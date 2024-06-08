"use client";

import useQueryGetDetail from "@/hooks/queries/member/useQueryGetDetail";
import { createContext, ReactNode, useContext } from "react";

type MemberDetailContextProps = ReturnType<typeof useQueryGetDetail>;

// @ts-ignore
const MemberDetailContext = createContext<MemberDetailContextProps>({
	data: undefined,
	dataUpdatedAt: 0,
	error: null,
	errorUpdateCount: 0,
	errorUpdatedAt: 0,
	failureCount: 0,
	failureReason: null,
	fetchStatus: "idle",
	isError: false,
	isFetched: false,
	isFetchedAfterMount: false,
	isFetching: false,
	isLoading: false,
	isLoadingError: false,
	isPaused: false,
	isPending: false,
	isPlaceholderData: false,
	isRefetchError: false,
	isRefetching: false,
	isStale: false,
	isSuccess: false,
	status: "pending",
});

export const useMemberDetailContext = () => useContext(MemberDetailContext);

interface MemberDetailProviderProps {
	children: ReactNode | ReactNode[];
}

function MemberDetailProvider(props: MemberDetailProviderProps) {
	const { children } = props;

	const queryResult = useQueryGetDetail({
		req: undefined,
		queryOption: {
			refetchOnWindowFocus: false,
		},
	});

	return <MemberDetailContext.Provider value={queryResult}>{children}</MemberDetailContext.Provider>;
}

export default MemberDetailProvider;
