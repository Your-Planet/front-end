import { GlobalIa } from "@/defines/ia/types";
import { deepFreeze } from "@/utils/object";

export const IA = deepFreeze<GlobalIa>({
	title: "Your Planet",
	label: "홈",

	login: {
		title: "로그인",
		label: "로그인",
		accessConfig: {
			disallowedOnLogin: true,
		},
	},

	join: {
		title: "회원가입",
		label: "회원가입",

		author: {
			title: "작가 회원가입",
			label: "작가 회원가입",

			verify: {
				title: "작가 회원가입 | 이메일 인증",
				label: "이메일 인증",
			},

			details: {
				title: "작가 회원가입 | 회원정보 입력",
				label: "회원정보 입력",
			},

			complete: {
				title: "작가 회원가입 | 회원가입 완료",
				label: "회원가입 완료",
			},
		},

		sponsor: {
			title: "광고주 회원가입",
			label: "광고주 회원가입",

			details: {
				title: "광고주 회원가입 | 회원정보 입력",
				label: "회원정보 입력",
			},

			complete: {
				title: "광고주 회원가입 | 회원가입 완료",
				label: "회원가입 완료",
			},
		},
	},

	deletion: {
		title: "회원 탈퇴",
		label: "회원 탈퇴",
		accessConfig: {
			allowedOnLogin: true,
		},

		complete: {
			title: "회원 탈퇴 | 탈퇴 완료",
			label: "탈퇴 완료",
			accessConfig: {
				allowedOnLogin: true,
			},
		},
	},

	search: {
		title: "작가 찾기",
		label: "작가 찾기",
	},

	project: {
		title: "프로젝트 의뢰",
		label: "프로젝트 의뢰",
	},

	mypage: {
		title: "마이페이지",
		label: "마이페이지",
		accessConfig: {
			allowedOnLogin: true,
		},

		portfolio: {
			title: "포트폴리오",
			label: "포트폴리오",
			accessConfig: {
				allowedOnLogin: true,
				allowedMemberTypes: ["AUTHOR"],
			},

			update: {
				title: "포트폴리오 | 수정",
				label: "포트폴리오 수정",
				accessConfig: {
					allowedOnLogin: true,
					allowedMemberTypes: ["AUTHOR"],
				},
			},
		},

		"project-history": {
			title: "프로젝트 이력",
			label: "프로젝트 이력",
			accessConfig: {
				allowedOnLogin: true,
			},

			"[id]": {
				title: "프로젝트 이력",
				label: "상세 보기",
				accessConfig: {
					allowedOnLogin: true,
				},
			},
		},
	},

	find: {
		title: "이메일/비밀번호 찾기",
		label: "이메일/비밀번호 찾기",

		email: {
			title: "이메일 찾기",
			label: "이메일 찾기",

			complete: {
				title: "이메일 찾기 | 완료",
				label: "이메일 찾기 완료",
			},
		},

		pw: {
			title: "비밀번호 찾기",
			label: "비밀번호 찾기",

			complete: {
				title: "비밀번호 찾기 | 완료",
				label: "비밀번호 찾기 완료",
			},
		},
	},

	"reset-pw": {
		title: "비밀번호 재설정",
		label: "비밀번호 재설정",
	},

	terms: {
		title: "이용약관",
		label: "이용약관",
	},

	privacy: {
		title: "개인정보처리방침",
		label: "개인정보처리방침",
	},
});
