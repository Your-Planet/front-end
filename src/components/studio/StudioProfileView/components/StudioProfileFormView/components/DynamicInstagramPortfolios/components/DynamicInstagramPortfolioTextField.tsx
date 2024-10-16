import { InstagramMedia } from "@/apis/instagram";
import ReactHookForm from "@/components/common/ReactHookForm";
import { DEFAULT_PORTFOLIO } from "@/components/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import DuplicatedError from "@/defines/errors/DuplicatedError";
import InvalidUrlError from "@/defines/errors/InvalidUrlError";
import { HookFormChangeEventHandler } from "@/defines/hook-form/types";
import { TIME_UNIT } from "@/defines/time/constants";
import { useFetchQueryGetMedias } from "@/hooks/queries/instagram/useQueryGetMedias";
import { handleCommonError } from "@/utils/error";
import { getObjectAtPath } from "@/utils/object";
import { Check as CheckIcon } from "@mui/icons-material";
import { CircularProgress, Zoom } from "@mui/material";
import { debounce } from "lodash-es";
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FieldPath } from "react-hook-form/dist/types/path";

const INSTAGRAM_MEDIA_URL_PREFIX = "https://www.instagram.com/p/";

interface DynamicInstagramPortfolioTextFieldProps {
	index: number;
}

function DynamicInstagramPortfolioTextField(props: DynamicInstagramPortfolioTextFieldProps) {
	const { index } = props;

	const formName: FieldPath<StudioProfileForm> = `portfolios.${index}`;

	const { TextField } = ReactHookForm<StudioProfileForm>();

	const {
		formState: { errors },
		register,
		setValue,
		getValues,
		setError,
		clearErrors,
		watch,
	} = useFormContext<StudioProfileForm>();

	const portfolio = watch(formName);

	const error = getObjectAtPath(errors, formName);

	register(formName, {
		validate: (portfolio) => {
			if (!portfolio.id) {
				return "올바른 포트폴리오 URL을 입력해 주세요.";
			}
			return true;
		},
	});

	const fetchQueryGetMedias = useFetchQueryGetMedias();

	const [isChecking, setIsChecking] = useState(false);

	const getMediaByLink = async (value: string) => {
		const {
			data: {
				medias: [media],
			},
		} = await fetchQueryGetMedias({
			permalink: value,
		});

		return media;
	};

	const getIsUrlValid = (value: string) => {
		return !value.startsWith(INSTAGRAM_MEDIA_URL_PREFIX);
	};

	const setPortfolio = (media: InstagramMedia) => {
		setValue(formName, media);
	};

	const clearPortfolio = () => {
		setPortfolio({
			...DEFAULT_PORTFOLIO,
			permalink: portfolio.permalink,
		} as InstagramMedia);
	};

	const clearError = () => clearErrors(formName);

	const handleError = (e: unknown) => {
		clearPortfolio();

		handleCommonError(e, (errorMessage) => {
			setError(formName, {
				type: "validate",
				message: errorMessage,
			});
		});
	};

	const getIsPortfolioDuplicated = (media: InstagramMedia) => {
		const currentPortfolios = getValues("portfolios");

		return currentPortfolios.some(({ id }, i) => media.id === id && i !== index);
	};

	const setMediaByLink = async (instagramMediaLink: string) => {
		if (!instagramMediaLink) {
			clearError();
			clearPortfolio();
			return;
		}

		if (getIsUrlValid(instagramMediaLink)) {
			throw new InvalidUrlError("올바른 URL 형식을 입력해 주세요.");
		}

		const media = await getMediaByLink(instagramMediaLink);

		if (!media) {
			throw new Error("조회된 게시글이 없습니다.");
		}

		if (getIsPortfolioDuplicated(media)) {
			throw new DuplicatedError("중복된 게시글입니다.");
		}

		clearError();

		setPortfolio(media);
	};

	const setPortfolioByLink = useCallback(
		debounce(async (instagramMediaLink: string) => {
			try {
				await setMediaByLink(instagramMediaLink);
			} catch (e) {
				handleError(e);
			} finally {
				setIsChecking(false);
			}
		}, TIME_UNIT.unitOfMs.asSecond),
		[],
	);

	const handleChange: HookFormChangeEventHandler = async (e) => {
		setIsChecking(true);
		await setPortfolioByLink(e.target.value);
	};

	const getHelperText = () => {
		if (isChecking) {
			return <CircularProgress size="12px" />;
		}

		if (portfolio.id) {
			return (
				<Zoom in style={{ transitionDuration: "500ms" }}>
					<CheckIcon sx={{ fontSize: "12px" }} color="success" />
				</Zoom>
			);
		}

		return error?.message ?? " ";
	};

	return (
		<TextField
			formName={`portfolios.${index}.permalink`}
			rules={{
				onChange: handleChange,
			}}
			label=""
			placeholder={INSTAGRAM_MEDIA_URL_PREFIX}
			fullWidth
			error={Boolean(error)}
			helperText={getHelperText()}
		/>
	);
}

export default DynamicInstagramPortfolioTextField;
