import {
	DefaultService,
	ProvidingServiceWithWorkingDays,
	ServiceOptionTypeByWorkingDays,
	StudioProfile,
} from "@/apis/studio";
import { ReactNode, createContext, useContext, useMemo } from "react";

type WithoutPrice<T extends { price: number }> = Omit<T, "price">;

// TODO @김현규 price 부분 API model로 대체
export interface AuthorIntroductionStudioContextProps {
	instagramUsername: string;
	profile: StudioProfile;
	price: {
		service: WithoutPrice<DefaultService>;
		option: Record<ServiceOptionTypeByWorkingDays["withWorkingDays"], WithoutPrice<ProvidingServiceWithWorkingDays>> &
			Record<ServiceOptionTypeByWorkingDays["withoutWorkingDays"], WithoutPrice<ProvidingServiceWithWorkingDays>>;
	};
}

const AuthorIntroductionStudioContext = createContext<AuthorIntroductionStudioContextProps | undefined>(undefined);

export const useAuthorIntroductionStudio = () => useContext(AuthorIntroductionStudioContext);

interface AuthorIntroductionStudioProviderProps {
	children: ReactNode;
}

function AuthorIntroductionStudioProvider({ children }: AuthorIntroductionStudioProviderProps) {
	// TODO @김현규 API 연동
	const contextValue: AuthorIntroductionStudioContextProps = useMemo(
		() => ({
			instagramUsername: "yp_hyeon.q",
			profile: {
				name: "우띠우하하",
				description:
					"웃음과 감동을 전하는 우띠우하하! 인스타그램을 통해 카툰으로 일상 속 작은 기끔을 전달합니다. 소통을 통해 새로운 이야기를 함꼐 만들ㄹ어 나가요.",
				categories: ["BEAUTY", "EMPATHY", "FASHION"],
				portfolios: [],
			},
			price: {
				service: {
					defaultCuts: 8,
					modificationCount: 1,
					postDurationMonthType: "THREE_MONTH",
					workingDays: 10,
				},
				option: {
					refinement: {
						provisionType: "PROVIDED",
						workingDays: 3,
					},
					originFile: {
						provisionType: "UNPROVIDED",
						workingDays: 0,
					},
					additionalPanel: {
						provisionType: "DEFAULT",
						workingDays: 2,
					},
					postDurationExtension: {
						provisionType: "PROVIDED",
						workingDays: 2,
					},
					additionalModification: {
						provisionType: "UNPROVIDED",
						workingDays: 0,
					},
				},
			},
		}),
		[],
	);

	return (
		<AuthorIntroductionStudioContext.Provider value={contextValue}>{children}</AuthorIntroductionStudioContext.Provider>
	);
}

export default AuthorIntroductionStudioProvider;
