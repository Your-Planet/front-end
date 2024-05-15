import { InstagramMedia } from "@/apis/instagram";
import DynamicAppend from "@/components/common/DynamicAppend";
import ReactHookForm from "@/components/common/ReactHookForm";
import {
	DEFAULT_PORTFOLIO,
	STUDIO_PROFILE_FORM_LENGTH,
} from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import InvalidUrlError from "@/defines/errors/InvalidUrlError";
import { HookFormChangeEventHandler } from "@/defines/hook-form/types";
import { TIME_UNIT } from "@/defines/time/constants";
import { useFetchQueryGetMedias } from "@/hooks/queries/instagram/useQueryGetMedias";
import { handleCommonError } from "@/utils/error";
import { getObjectAtPath } from "@/utils/object";
import { debounce } from "lodash-es";
import { useFormContext } from "react-hook-form";

const INSTAGRAM_MEDIA_URL_PREFIX = "https://www.instagram.com/p/";

export interface DynamicInstagramPortfoliosProps {
	label: string;
}

function DynamicInstagramPortfolios(props: DynamicInstagramPortfoliosProps) {
	const { label } = props;

	const { TextField } = ReactHookForm<StudioProfileForm>();

	const {
		setValue,
		setError,
		formState: { errors },
		register,
		clearErrors,
	} = useFormContext<StudioProfileForm>();

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
			throw new InvalidUrlError("올바른 URL 형식을 입력해 주세요.");
		}
	};

	const setPortfolio = (index: number, media: InstagramMedia) => {
		setValue(`portfolios.${index}`, media);
	};

	const handleError = (e: unknown, index: number) => {
		handleCommonError(e, (errorMessage) => {
			setError(`portfolios.${index}`, {
				type: "validate",
				message: errorMessage,
			});
		});
	};

	const setMediaByLink = debounce(async (instagramMediaLink: string, index: number) => {
		if (!instagramMediaLink) return;

		try {
			checkUrlValid(instagramMediaLink);
			clearErrors(`portfolios.${index}`);

			const media = (await getMediaByLink(instagramMediaLink))!;
			setPortfolio(index, media);
		} catch (e) {
			handleError(e, index);
		}
	}, TIME_UNIT.unitOfMs.asSecond);

	const handleChange: HookFormChangeEventHandler = async (e) => {
		const index = Number(e.target.name.split(".")[1]);
		await setMediaByLink(e.target.value, index);
	};

	return (
		<DynamicAppend<StudioProfileForm>
			label={label}
			formName="portfolios"
			component={({ index }) => {
				const error = getObjectAtPath(errors, `portfolios.${index}`);

				register(`portfolios.${index}`, {
					validate: (portfolio) => {
						if (!portfolio.id) {
							return "올바른 포트폴리오 URL을 입력해 주세요.";
						}
						return true;
					},
				});

				return (
					<TextField
						formName={`portfolios.${index}.permalink`}
						rules={{
							onChange: handleChange,
						}}
						label=""
						placeholder={INSTAGRAM_MEDIA_URL_PREFIX}
						fullWidth
						error={error}
						helperText={error?.message ?? " "}
					/>
				);
			}}
			maxCount={STUDIO_PROFILE_FORM_LENGTH.portfolios.max}
			defaultValue={DEFAULT_PORTFOLIO}
			required
		/>
	);
}

export default DynamicInstagramPortfolios;
