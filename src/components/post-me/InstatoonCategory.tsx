"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import { SELECTED_GENRE_LIMIT } from "@/defines/post-me/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, FormControl, FormGroup, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import HelpIcon from "../common/HelpIcon/index";
import { LABEL_BY_GENRE_TYPE } from "../search/defines/constants";
import { GenreType } from "../search/defines/types";
import { PostMeForm } from "./defines/types";

const schema = yup.object().shape({
	checkboxGroup: yup
		.array()
		.min(SELECTED_GENRE_LIMIT.min, `최소 ${SELECTED_GENRE_LIMIT.min}개를 선택해 주세요.`)
		.max(SELECTED_GENRE_LIMIT.max, `최대 ${SELECTED_GENRE_LIMIT.max}개 선택할 수 있어요.`)
		.required("Required"),
});

const checkboxOptions = () =>
	Object.entries(LABEL_BY_GENRE_TYPE)
		.filter((value) => value[0] !== "ALL")
		.map((value) => {
			const [genre, label] = value;

			return {
				label,
				value: genre as GenreType,
			};
		});

function InstatoonCategory() {
	const { control } = useForm<PostMeForm>({
		mode: "all",
		resolver: yupResolver(schema),
	});
	const config = { label: "label", value: "value" };
	const { CheckboxGroup } = ReactHookForm<PostMeForm>();

	return (
		<Box className="flex flex-col w-[50vw] h-fit">
			<FormControl variant="standard">
				<Box className="flex items-center">
					<Typography>인스타툰 카테고리</Typography>
					<HelpIcon />
				</Box>
				<FormGroup>
					<CheckboxGroup control={control} name="checkboxGroup" options={checkboxOptions()} config={config} />
				</FormGroup>
			</FormControl>
		</Box>
	);
}
export default InstatoonCategory;
