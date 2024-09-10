import ReactHookForm from "@/components/common/ReactHookForm";
import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import MenuItem from "@/components/project/common/fileds/MenuItem";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box } from "@mui/material";
import { useWatch } from "react-hook-form";

interface ProjectAdditionalPanelProps extends ProjectFormFieldCommonProps {
	isNegotiableFormName: ReactHookFormProps<ProjectCommonForm>["formName"];
}

function AdditionalPanel(props: ProjectAdditionalPanelProps) {
	const { formName, isNegotiableFormName, helperText, required } = props;

	const { TextField, Checkbox } = ReactHookForm<ProjectCommonForm>();

	const [count, isNegotiable] = useWatch<ProjectCommonForm, ["additionalPanel.count", "additionalPanel.isNegotiable"]>({
		name: ["additionalPanel.count", "additionalPanel.isNegotiable"],
	});

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="추가 컷 수"
					formName={formName}
					disabled={isNegotiable}
					defaultValue={count}
					required={required}
					helperText={helperText}
				>
					{
						// TODO: 나은찬 작가 기본 제공 컷수 파라미터 받아서 처리
						<MenuItem count={10} endAdornment="장" />
					}
				</TextField>
				<Checkbox formName={isNegotiableFormName} label={"작가와 협의 할래요"} hideErrorMessage />
			</Box>
		</Box>
	);
}

export default AdditionalPanel;
