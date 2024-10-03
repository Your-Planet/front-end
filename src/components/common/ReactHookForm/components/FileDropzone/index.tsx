import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import useReactHookFormControl from "@/components/common/ReactHookForm/hooks/useReactHookFormControl";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Chip, FormControl, FormHelperText, FormLabel, List, ListItem, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";

export interface ReactHookFormFileDropzoneProps<TFieldValues extends FieldValues>
	extends Omit<ReactHookFormProps<TFieldValues>, "formName">,
		Pick<DropzoneProps, "maxFiles" | "maxSize" | "disabled" | "onDropAccepted" | "onDropRejected"> {
	formName: FieldPath<{
		[K in keyof TFieldValues as TFieldValues[K] extends File[] ? K : never]: TFieldValues[K];
	}>;
	helperText?: string;
}

function ReactHookFormFileDropzone<TFieldValues extends FieldValues>(
	props: ReactHookFormFileDropzoneProps<TFieldValues>,
) {
	const { formName, helperText = "파일을 여기로 드래그하거나 클릭하여 탐색하세요." } = props;
	const {
		restProps,
		field: { onBlur },
		label,
		error,
		errorMessage,
		handleChange,
	} = useReactHookFormControl(props);

	const { setValue } = useFormContext<TFieldValues>();

	const handleDrop = (acceptedFiles: File[]) => {
		// @ts-ignore
		setValue(formName, acceptedFiles);
	};

	return (
		<FormControl error={Boolean(error)}>
			{label && <FormLabel id={formName}>{label}</FormLabel>}

			<Dropzone {...restProps} onDrop={handleDrop}>
				{({ getRootProps, getInputProps, acceptedFiles }) => {
					return (
						<Box>
							<Box
								{...getRootProps()}
								sx={{
									backgroundColor: grey[100],
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: "8px",
									padding: "24px 0",
									border: `2px dashed ${blue[500]}`,
									cursor: "pointer",
								}}
							>
								<input
									{...getInputProps({
										onChange: handleChange,
										onBlur,
									})}
								/>

								<Typography variant="body1" align="center" color={grey[500]}>
									{helperText}
								</Typography>

								<CloudUploadIcon
									sx={{
										color: grey[500],
									}}
								/>
							</Box>

							<List>
								{acceptedFiles.map((file) => (
									// @ts-ignore
									<ListItem key={file.path}>
										<Chip label={file.name} color="primary" variant="outlined" onDelete={() => {}} />
									</ListItem>
								))}
							</List>
						</Box>
					);
				}}
			</Dropzone>

			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default ReactHookFormFileDropzone;
