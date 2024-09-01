import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, MenuItem } from "@mui/material";
import { useWatch } from "react-hook-form";

function AdditionalModification(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	const count = useWatch<ProjectCommonForm>({
		name: "additionalModification.count",
	});

	const getAdditionalModificationCount = () => {
		// TODO: 나은찬 작가 기본 수정 횟수 파라미터 받아서 처리
		const tempCount = 10;

		return Array.from({ length: tempCount }, (_, i) => {
			return (
				<MenuItem key={i} value={i}>
					{i === 0 ? "추가 안함" : `${i}회`}
				</MenuItem>
			);
		});
	};

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="추가 수정 횟수"
					formName="additionalModification.count"
					defaultValue={count}
					required={required}
					helperText={helperText}
				>
					{getAdditionalModificationCount()}
				</TextField>
			</Box>
		</Box>
	);
}

export default AdditionalModification;
