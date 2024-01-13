import { tosCheckedContext } from "@/recoil/atoms/TermsOfService";
import { Box, Checkbox, DialogContent, TextField, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { FALSE_TOS_CHECKED_STATE, TRUE_TOS_CHECKED_STATE } from "./defines/constants";
import { tosCheckedStateType, tosLabel } from "./defines/types";

type Props = {
	label: tosLabel;
	content: string;
	tosText?: string;
	required?: boolean;
};

function DialogContentWithCheckBox(props: Props) {
	const { label, content, tosText, required } = props;

	const textFieldInputProps = {
		style: {
			fontSize: 14,
			color: "gray",
		},
	};

	const [tosState, setTosState] = useRecoilState<tosCheckedStateType>(tosCheckedContext);

	const handleChange = () => {
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
				<Box className="flex justify-between items-center">
					{required ? (
						<Box className="flex items-center">
							<Typography variant="body2">{content}</Typography>
							<Typography className="ml-1 text-red-500">(필수)</Typography>
						</Box>
					) : (
						<Typography variant="body2">{content}</Typography>
					)}
					<Checkbox checked={tosState[label]} onChange={handleChange} />
				</Box>
			</DialogContent>
			{tosText && (
				<TextField
					className="read-only:bg-gray-100"
					multiline
					maxRows={7}
					defaultValue={tosText}
					inputProps={textFieldInputProps}
				/>
			)}
		</>
	);
}

export default DialogContentWithCheckBox;
