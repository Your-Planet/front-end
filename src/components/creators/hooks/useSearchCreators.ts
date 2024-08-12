import { GetCreatorsRequest } from "@/apis/studio/models/creators";
import useQueryGetCreators from "@/hooks/queries/studio/useQueryGetCreators";
import { useCallback, useState } from "react";

export const useSearchCreators = () => {
	const [params, setParams] = useState<GetCreatorsRequest>({});
	const { data: { data: creators } = {}, isLoading, refetch } = useQueryGetCreators({ req: params });

	const handleClickSearch = useCallback(
		async (params: GetCreatorsRequest) => {
			setParams(params);
			await refetch();
		},
		[refetch],
	);

	return {
		creatorsResponse: creators,
		handleClickSearch,
		isLoading,
	};
};
