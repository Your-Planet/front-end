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

	logout: {
		title: "로그아웃",
		label: "로그아웃",
	},

	join: {
		title: "회원가입",
		label: "회원가입",

		creator: {
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
		},

		sponsor: {
			title: "광고주 회원가입",
			label: "광고주 회원가입",

			details: {
				title: "광고주 회원가입 | 회원정보 입력",
				label: "회원정보 입력",
			},
		},

		complete: {
			title: "회원가입 완료",
			label: "회원가입 완료",
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

	creators: {
		title: "작가 찾기",
		label: "작가 찾기",

		"[id]": {
			title: "작가 상세 보기",
			label: "작가 상세 보기",

			request: {
				title: "프로젝트 의뢰",
				label: "프로젝트 의뢰",

				step1: {
					title: "작업 세부 사항",
					label: "작업 세부 사항",
				},

				step2: {
					title: "프로젝트 정보",
					label: "프로젝트 정보",
				},

				confirm: {
					title: "의뢰 내용 확인",
					label: "의뢰 내용 확인",
				},

				complete: {
					title: "프로젝트 의뢰 완료",
					label: "프로젝트 의뢰 완료",
				},
			},
		},
	},

	project: {
		title: "프로젝트 의뢰",
		label: "프로젝트 의뢰",

		"[id]": {
			title: "프로젝트 상세",
			label: "프로젝트 상세",
		},
	},

	studio: {
		title: "작가 스튜디오",
		label: "작가 스튜디오",
		accessConfig: {
			allowedOnLogin: true,
			allowedMemberTypes: ["CREATOR"],
		},

		profile: {
			title: "작가 스튜디오 | 프로필",
			label: "프로필 설정",
			accessConfig: {
				allowedOnLogin: true,
				allowedMemberTypes: ["CREATOR"],
			},
		},

		price: {
			title: "작가 스튜디오 | 가격",
			label: "가격 설정",
			accessConfig: {
				allowedOnLogin: true,
				allowedMemberTypes: ["CREATOR"],
			},
		},
	},

	userinfo: {
		title: "회원 정보 수정",
		label: "회원 정보 수정",

		verify: {
			title: "회원 정보 확인",
			label: "회원 정보 확인",
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
