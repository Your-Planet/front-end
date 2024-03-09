import { AccordionDetails, Box, Checkbox, DialogContent, TextField, Typography } from "@mui/material";
import { Accordion, AccordionSummary } from "./defines/styles";
import { TosLabel } from "./defines/types";

type Props = {
	label: TosLabel;
	content: string;
	tosText?: string;
	required?: boolean;
	optional?: boolean;
};

function DialogContentWithCheckBox(props: Props) {
	const { label, content, tosText, required, optional } = props;

	const textFieldInputProps = {
		style: {
			fontSize: 14,
			color: "gray",
			spellCheck: "false",
		},
	};

	const handleChange = () => {};

	return (
		<DialogContent className="overflow-y-visible px-0 py-1 ">
			<Accordion className="px-3">
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
	);
}

export default DialogContentWithCheckBox;
