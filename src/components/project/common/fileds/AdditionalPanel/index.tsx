import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";

function AdditionalPanel(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { watch, setValue } = useFormContext<ProjectCommonForm>();

	const { TextField, Checkbox } = ReactHookForm<ProjectCommonForm>();

	const [count, isNegotiable] = watch(["additionalPanel.count", "additionalPanel.isNegotiable"]);

	const getAdditionalPanelCountItems = () => {
		// TODO: 나은찬 작가 기본 제공 컷수 파라미터 받아서 처리
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

	return (
		<Box>
			<Box>
				<TextField
					select
					fullWidth
					label="추가 컷 수"
					formName={formName}
					disabled={isNegotiable}
					value={count.toString()}
					required={required}
					helperText={helperText}
				>
					{getAdditionalPanelCountItems()}
				</TextField>
				<Checkbox formName="additionalPanel.isNegotiable" label={"작가와 협의 할래요"} hideErrorMessage />
			</Box>
		</Box>
	);
}

export default AdditionalPanel;
