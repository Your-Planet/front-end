import { Box, Checkbox, DialogContent, TextField, Typography } from "@mui/material";

type Props = {
	content: string;
	tosText?: string;
	required?: boolean;
};

function DialogContentWithCheckBox(props: Props) {
	const { content, tosText, required } = props;

	const textFieldInputProps = {
		style: {
			fontSize: 14,
			color: "gray",
		},
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
					<Checkbox />
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
