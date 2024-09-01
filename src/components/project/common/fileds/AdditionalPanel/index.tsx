import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, MenuItem } from "@mui/material";
import { useWatch } from "react-hook-form";

function AdditionalPanel(props: ProjectFormFieldCommonProps) {
	const { formName, helperText, required } = props;

	const { TextField, Checkbox } = ReactHookForm<ProjectCommonForm>();

	const [count, isNegotiable] = useWatch<ProjectCommonForm, ["additionalPanel.count", "additionalPanel.isNegotiable"]>({
		name: ["additionalPanel.count", "additionalPanel.isNegotiable"],
	});

	const getAdditionalPanelCount = () => {
		// TODO: 나은찬 작가 기본 제공 컷수 파라미터 받아서 처리
		const tempCount = 10;

		return Array.from({ length: tempCount }, (_, i) => {
			return (
				<MenuItem key={i} value={i}>
					{i === 0 ? "추가 안함" : `${i}장`}
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
					formName="additionalPanel.count"
					disabled={isNegotiable}
					defaultValue={count}
					required={required}
					helperText={helperText}
				>
					{getAdditionalPanelCount()}
				</TextField>
				<Checkbox formName="additionalPanel.isNegotiable" label={"작가와 협의 할래요"} hideErrorMessage />
			</Box>
		</Box>
	);
}

export default AdditionalPanel;
