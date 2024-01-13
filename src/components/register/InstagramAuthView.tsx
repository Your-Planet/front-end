import Logo from "@/components/common/Logo";
import InstagramIcon from "@/icons/InstagramIcon";
import { getInstagramAuthUrl } from "@/utils/instagram";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export interface InstagramAuthViewProps {}

function InstagramAuthView(props: InstagramAuthViewProps) {
	const {} = props;

	const router = useRouter();
	// const pathname = usePathname();

	const handleClickInstagramAuth = () => {
		router.push(
			getInstagramAuthUrl({
				redirectUri: "https://www.yourplanet.co.kr/",
				// TODO @김현규 작가 회원가입 페이지로 리다이렉트
				// redirectUri: `${window.location.host}${pathname}`
			}),
		);
	};

	return (
		// TODO @김현규 height는 Header PR 머지 후 수정 예정
		<div className="min-h-[600px] max-h-full max-w-[520px] flex flex-col justify-between py-7 m-auto">
			<div>
				<Logo />
				<p className="mt-8 leading-7">
					인스타툰 작가 회원가입을 위해
					<br />
					최초 1회 인스타그램 인증이 필요합니다.
				</p>
			</div>

			<Button
				startIcon={<InstagramIcon fillColor="white" size={28} />}
				variant="contained"
				size="large"
				fullWidth
				onClick={handleClickInstagramAuth}
			>
				인스타그램 인증
			</Button>
		</div>
	);
}

export default InstagramAuthView;
