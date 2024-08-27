import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";

function PostDurationExtension(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { watch } = useFormContext<ProjectCommonForm>();

	const { TextField } = ReactHookForm<ProjectCommonForm>();

	const getPostDurationExtension = () => {
		// TODO: 나은찬 작가 기본 업로드 기간 파라미터 받아서 처리
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
					{i}개월
				</MenuItem>
			);
		});
	};

	const months = watch("postDurationExtension.months");

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="업로드 기간 연장"
					formName={formName}
					value={months.toString()}
					required={required}
					helperText={helperText}
				>
					{getPostDurationExtension()}
				</TextField>
			</Box>
		</Box>
	);
}

export default PostDurationExtension;
