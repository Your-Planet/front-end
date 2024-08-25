import ReactHookForm from "@/components/common/ReactHookForm";
import { ProjectCommonForm, ProjectFormFieldCommonProps } from "@/defines/forms/project/types";
import { Box, FormHelperText, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

function AdditionalPanel(props: ProjectFormFieldCommonProps) {
	const { formName, helperText } = props;

	const { watch, setValue } = useFormContext<ProjectCommonForm>();

	const { Checkbox } = ReactHookForm<ProjectCommonForm>();

	const handleChangeSelect = (event: SelectChangeEvent) => {
		setValue("additionalPanel.count", Number(event.target.value));
	};

	const [count, isNegotiable] = watch(["additionalPanel.count", "additionalPanel.isNegotiable"]);

	return (
		<Box>
			<Typography color="grey" fontWeight="bold">
				추가 컷 수
			</Typography>
			<FormHelperText>{helperText}</FormHelperText>
			<Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
				<Select disabled={isNegotiable} onChange={handleChangeSelect} value={count.toString()} sx={{ width: "8rem" }}>
					{/* TODO: 나은찬, 작가 별 기본 컷수 받아서 처리 */}
					<MenuItem value={0}>추가 안함</MenuItem>
					<MenuItem value={1}>1장</MenuItem>
					<MenuItem value={2}>2장</MenuItem>
					<MenuItem value={3}>3장</MenuItem>
					<MenuItem value={4}>4장</MenuItem>
					<MenuItem value={5}>5장</MenuItem>
					<MenuItem value={6}>6장</MenuItem>
					<MenuItem value={7}>7장</MenuItem>
					<MenuItem value={8}>8장</MenuItem>
					<MenuItem value={9}>9장</MenuItem>
				</Select>
				<Checkbox formName="additionalPanel.isNegotiable" label={"작가와 협의 할래요"} hideErrorMessage />
			</Box>
		</Box>
	);
}

export default AdditionalPanel;
