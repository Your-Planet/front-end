import { InstagramMedia } from "@/apis/instagram";
import DynamicAppend from "@/components/common/DynamicAppend";
import ReactHookForm from "@/components/common/ReactHookForm";
import {
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { HookFormChangeEventHandler } from "@/defines/hook-form/types";
import { TIME_UNIT } from "@/defines/time/constants";
import { useFetchQueryGetMedias } from "@/hooks/queries/instagram/useQueryGetMedias";
import { AxiosError } from "axios";
import { debounce } from "lodash-es";
import { useFormContext } from "react-hook-form";

const INSTAGRAM_MEDIA_URL_PREFIX = "https://www.instagram.com/p/";

export interface DynamicInstagramPortfoliosProps {
	label: string;
}

function DynamicInstagramPortfolios(props: DynamicInstagramPortfoliosProps) {
	const { label } = props;

	const { TextField } = ReactHookForm<StudioProfileForm>();

	const { setValue } = useFormContext<StudioProfileForm>();

	const fetchQueryGetMedias = useFetchQueryGetMedias();

	const getMediaByLink = async (value: string) => {
		const {
			data: {
				medias: [media],
			},
		} = await fetchQueryGetMedias({
			permalink: value,
		});

		if (!media) {
			throw new Error("조회된 게시글이 없습니다.");
		}

		return media;
	};

	const checkUrlValid = (value: string) => {
		if (!value.startsWith(INSTAGRAM_MEDIA_URL_PREFIX)) {
			throw new Error("올바른 URL 형식을 입력해 주세요.");
		}
	};

	const setPortfolio = (index: number, media: InstagramMedia) => {
		const { id, permalink } = media;
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

	const setMediaByLink = debounce(async (linkValue: string, index: number) => {
		if (!linkValue) return;

		try {
			checkUrlValid(linkValue);
			const media = (await getMediaByLink(linkValue))!;
			setPortfolio(index, media);
		} catch (e) {
			handleError(e);
		}
	}, 0.4 * TIME_UNIT.unitOfMs.asSecond);

	const handleChange: HookFormChangeEventHandler = async (e) => {
		const index = Number(e.target.name.split(".")[1]);
		await setMediaByLink(e.target.value, index);
	};

	return (
		<DynamicAppend<StudioProfileForm>
			label={label}
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
