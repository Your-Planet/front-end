import {
	DefaultService,
	ProvidingServiceWithWorkingDays,
	ServiceOptionTypeByWorkingDays,
	StudioProfile,
} from "@/apis/studio";
import { ReactNode, createContext, useContext, useMemo } from "react";

type WithoutPrice<T extends { price: number }> = Omit<T, "price">;

// TODO @김현규 price 부분 API model로 대체
export interface AuthorStudioContextProps {
	instagramUsername: string;
	profile: StudioProfile;
	price: {
		service: WithoutPrice<DefaultService>;
		option: Record<ServiceOptionTypeByWorkingDays["withWorkingDays"], WithoutPrice<ProvidingServiceWithWorkingDays>> &
			Record<ServiceOptionTypeByWorkingDays["withoutWorkingDays"], WithoutPrice<ProvidingServiceWithWorkingDays>>;
	};
}

const AuthorStudioContext = createContext<AuthorStudioContextProps | undefined>(undefined);

export const useAuthorStudio = () => useContext(AuthorStudioContext);

interface AuthorStudioProviderProps {
	children: ReactNode;
}

function AuthorStudioProvider({ children }: AuthorStudioProviderProps) {
	// TODO @김현규 API 연동
	const contextValue: AuthorStudioContextProps = useMemo(
		() => ({
			instagramUsername: "yp_hyeon.q",
			profile: {
				name: "우띠우하하",
				description:
					"웃음과 감동을 전하는 우띠우하하! 인스타그램을 통해 카툰으로 일상 속 작은 기끔을 전달합니다. 소통을 통해 새로운 이야기를 함꼐 만들ㄹ어 나가요.",
				categories: ["BEAUTY", "EMPATHY", "FASHION"],
				portfolios: [
					{
						id: "18124638682317523",
						caption: "개더러운 에어컨 청소 ㅋㅋ\n#청소 #청소년 #청소기 #청소스타그램 #청소년지도사 #청소요정",
						mediaType: "CAROUSEL_ALBUM",
						mediaUrl:
							"https://scontent-gmp1-1.cdninstagram.com/v/t51.29350-15/436270258_2410375722485511_5042405694914411_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=Hc3kciAPF8UQ7kNvgFnf5hX&_nc_ht=scontent-gmp1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCasQgtYYWEQHpRImJUTA0vt9h6d1eRChgc11f5O8HACA&oe=6668E7A0",
						thumbnailUrl: "https://www.instagram.com/p/C68osmJSRrc/media/?size=l",
						permalink: "https://www.instagram.com/p/C68osmJSRrc/",
						timestamp: null,
						username: "yp_hyeon.q",
						sharedToFeed: false,
					},
				],
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

	return <AuthorStudioContext.Provider value={contextValue}>{children}</AuthorStudioContext.Provider>;
}

export default AuthorStudioProvider;
