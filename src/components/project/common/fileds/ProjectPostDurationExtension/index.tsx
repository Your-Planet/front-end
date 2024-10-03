import ReactHookForm from "@/components/common/ReactHookForm";
import { getMenuItems } from "@/components/project/common/utils";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box } from "@mui/material";
import { useWatch } from "react-hook-form";

function ProjectPostDurationExtension(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	const months = useWatch<ProjectCommonForm>({
		name: "postDurationExtension.months",
	});

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="업로드 기간 연장"
					formName={formName}
					defaultValue={months}
					required={required}
					helperText={helperText}
				>
					{
						// TODO: 나은찬 작가 기본 업로드 기간 파라미터 받아서 처리
						getMenuItems(10, "개월")
					}
				</TextField>
			</Box>
		</Box>
	);
}

export default ProjectPostDurationExtension;
