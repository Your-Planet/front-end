import { InstagramPost } from "@/apis/instagram";
import DynamicAppend from "@/components/common/DynamicAppend";
import ReactHookForm from "@/components/common/ReactHookForm";
import {
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { HookFormChangeEventHandler } from "@/defines/hook-form/types";
import { TIME_UNIT } from "@/defines/time/constants";
import { useFetchQueryGetPosts } from "@/hooks/queries/instagram/useQueryGetPosts";
import { isUrl } from "@/utils/string";
import { AxiosError } from "axios";
import { debounce } from "lodash-es";
import { useFormContext } from "react-hook-form";

export interface DynamicInstagramPortfoliosProps {}

function DynamicInstagramPortfolios(props: DynamicInstagramPortfoliosProps) {
	const {} = props;

	const { TextField } = ReactHookForm<StudioProfileForm>();

	const { setValue } = useFormContext<StudioProfileForm>();

	const fetchQueryGetPosts = useFetchQueryGetPosts();

	const getPostByLink = async (value: string) => {
		const {
			data: {
				posts: [post],
			},
		} = await fetchQueryGetPosts({
			permalink: value,
		});

		if (!post) {
			throw new Error("조회된 게시글이 없습니다.");
		}

		return post;
	};

	const checkUrlValid = (value: string) => {
		if (!isUrl(value)) {
			throw new Error("올바른 URL 형식을 입력해 주세요.");
		}
	};

	const setPortfolio = (index: number, post: InstagramPost) => {
		const { id, permalink } = post;
		setValue(`portfolios.${index}.id`, id);
		setValue(`portfolios.${index}.permalink`, permalink);
	};

	const handleError = (e: unknown) => {
		// TODO @김현규 에러 처리
		if (e instanceof AxiosError) {
			console.error(e?.response?.data.message);
		} else if (e instanceof Error) {
			console.error(e.message);
		} else {
			console.error(e);
		}
	};

	const setPostByLink = debounce(async (linkValue: string, index: number) => {
		if (!linkValue) return;

		try {
			checkUrlValid(linkValue);
			const post = (await getPostByLink(linkValue))!;
			setPortfolio(index, post);
		} catch (e) {
			handleError(e);
		}
	}, 0.4 * TIME_UNIT.unitOfMs.asSecond);

	const handleChange: HookFormChangeEventHandler = async (e) => {
		const index = Number(e.target.name.split(".")[1]);
		await setPostByLink(e.target.value, index);
	};

	return (
		<DynamicAppend<StudioProfileForm>
			label="포트폴리오 링크"
			formName="portfolios"
			component={({ index }) => (
				<TextField
					formName={`portfolios.${index}.permalink`}
					rules={{
						onChange: handleChange,
					}}
					label=""
					fullWidth
				/>
			)}
			maxCount={STUDIO_PROFILE_FORM_LENGTH.portfolios.max}
			defaultValue={DEFAULT_PORTFOLIO}
			required
		/>
	);
}

export default DynamicInstagramPortfolios;
