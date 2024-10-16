import { API } from "@/apis";
import { CreatorStudioRequest, CreatorStudioResponse } from "@/apis/studio/models/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = CreatorStudioRequest;

type Response = ResponseEntity<CreatorStudioResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetCreatorStudioParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetCreatorStudio = UseQueryResult<Response, Error>;

function useQueryGetCreatorStudio(params: UseQueryGetCreatorStudioParams): UseQueryGetCreatorStudio {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.studio.creatorStudio(req),
		queryFn: async () => (await API.studio.getCreatorStudio(req)).data,
		...queryOption,
	});
}

export default useQueryGetCreatorStudio;
