import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import { QUERY_KEY } from "@/defines/react-query/constants";
import useSearchParamId from "@/hooks/common/useSearchParamId";
import { useIsFetching } from "@tanstack/react-query";

export default function useLoadingCreatorStudio() {
	const id = useSearchParamId();
	const studio = useCreatorStudio();

	const fetchingCount = useIsFetching({
		type: "active",
		queryKey: QUERY_KEY.studio.creatorStudio({ id }),
	});

	return Boolean(fetchingCount || !studio);
}
