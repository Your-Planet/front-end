import { tosCheckedContext } from "@/recoil/atoms/TermsOfService";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { AccordionDetails, Box, Checkbox, DialogContent, TextField, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { FALSE_TOS_CHECKED_STATE, TRUE_TOS_CHECKED_STATE } from "./defines/constants";
import { tosCheckedStateType, tosLabel } from "./defines/types";

type Props = {
	label: tosLabel;
	content: string;
	tosText?: string;
	required?: boolean;
	optional?: boolean;
};

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
	({ theme }) => ({
		border: `1px solid ${theme.palette.divider}`,
		"&:not(:last-child)": {
			borderBottom: 0,
		},
		"&::before": {
			display: "none",
		},
	}),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
	flexDirection: "row-reverse",
	padding: 0,
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

function DialogContentWithCheckBox(props: Props) {
	const { label, content, tosText, required, optional } = props;

	const textFieldInputProps = {
		style: {
			fontSize: 14,
			color: "gray",
		},
		spellCheck: "false",
	};

	const [tosState, setTosState] = useRecoilState<tosCheckedStateType>(tosCheckedContext);

	const handleChange = () => {
		// FIX_ME: 인스타 인증 화면에서 뒤로가기 시 체크 상태 그대로 유지됨
		// FIX_ME: 필수 약관 체크 해제 시 ALL 표시도 해제 필요.
		if (label === "ALL") {
			if (!tosState.ALL) {
				setTosState(TRUE_TOS_CHECKED_STATE);
			} else {
				setTosState(FALSE_TOS_CHECKED_STATE);
			}
		} else {
			setTosState({
				...tosState,
				[label]: !tosState[label],
			});
		}
	};

	return (
		<>
			<DialogContent className="overflow-y-visible px-0 py-1 ">
				<Accordion>
					<Box className="flex justify-between items-center">
						{required ? (
							<AccordionSummary>
								<Typography variant="body2">{content}</Typography>
								<Typography className="ml-1 text-red-500 text-sm">(필수)</Typography>
							</AccordionSummary>
						) : optional ? (
							<AccordionSummary>
								<Typography variant="body2">{content}</Typography>
								<Typography className="ml-1 text-gray-500 text-sm">(선택)</Typography>
							</AccordionSummary>
						) : (
							<Typography variant="body2">{content}</Typography>
						)}
						<Checkbox checked={tosState[label]} onChange={handleChange} />
					</Box>
					{tosText && (
						<AccordionDetails>
							<TextField
								className="read-only:bg-gray-100"
								multiline
								fullWidth
								maxRows={7}
								defaultValue={tosText}
								inputProps={textFieldInputProps}
							/>
						</AccordionDetails>
					)}
				</Accordion>
			</DialogContent>
		</>
	);
}

export default DialogContentWithCheckBox;
