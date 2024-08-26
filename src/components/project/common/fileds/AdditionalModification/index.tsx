import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";

function AdditionalModification(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { watch } = useFormContext<ProjectCommonForm>();

	const { TextField, Checkbox } = ReactHookForm<ProjectCommonForm>();

	const getAdditionalModificationCount = () => {
		// TODO: 나은찬 작가 기본 수정 횟수 파라미터 받아서 처리
		const tempCount = 10;

		return Array.from({ length: tempCount }, (_, i) => {
			if (i === 0) {
				return (
					<MenuItem key={i} value={i}>
						추가 안함
					</MenuItem>
				);
			}

			return (
				<MenuItem key={i} value={i}>
					{i}장
				</MenuItem>
			);
		});
	};

	const count = watch("additionalModification.count");

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="추가 수정 횟수"
					formName={formName}
					value={count.toString()}
					required={required}
					helperText={helperText}
				>
					{getAdditionalModificationCount()}
				</TextField>
				<Checkbox formName="additionalPanel.isNegotiable" label={"작가와 협의 할래요"} hideErrorMessage />
			</Box>
		</Box>
	);
}

export default AdditionalModification;
