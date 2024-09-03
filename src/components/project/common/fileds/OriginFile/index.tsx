import ReactHookForm from "@/components/common/ReactHookForm";
import { DEMAND_RADIOS } from "@/defines/forms/project/constants";
import { DemandType, ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box } from "@mui/material";
import { useWatch } from "react-hook-form";

function OriginFile(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { RadioGroup } = ReactHookForm<ProjectCommonForm>();

	const demandType = useWatch<ProjectCommonForm>({
		name: "originFile.demandType",
	});

	return (
		<Box>
			<RadioGroup<DemandType>
				label="원본 파일"
				formName={formName}
				radios={DEMAND_RADIOS}
				helperText={helperText}
				required={required}
				value={demandType}
				row
			/>
		</Box>
	);
}

export default OriginFile;
