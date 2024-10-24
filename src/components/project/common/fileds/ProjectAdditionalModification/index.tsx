import ReactHookForm from "@/components/common/ReactHookForm";
import { getMenuItems } from "@/components/project/common/utils";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box } from "@mui/material";
import { useWatch } from "react-hook-form";

function ProjectAdditionalModification(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	const count = useWatch<ProjectCommonForm>({
		name: "additionalModification.count",
	});

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="추가 수정 횟수"
					formName={formName}
					defaultValue={count}
					required={required}
					helperText={helperText}
				>
					{
						// TODO: 나은찬 작가 기본 수정 횟수 파라미터 받아서 처리
						getMenuItems(10, "회")
					}
				</TextField>
			</Box>
		</Box>
	);
}

export default ProjectAdditionalModification;
