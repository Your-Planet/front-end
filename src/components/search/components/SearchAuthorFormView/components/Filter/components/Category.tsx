import ReactHookForm from "@/components/common/ReactHookForm";
import {
	CATEGORY_BOX_WIDTH,
	CATEGORY_GRID_WIDTH,
} from "@/components/search/components/SearchAuthorFormView/components/defines/constants";
import { SearchAuthorForm } from "@/components/search/components/SearchAuthorFormView/defines/types";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Box, Button, Grid, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useFormContext } from "react-hook-form";

type Props = {};

function Category({}: Props) {
	const { Checkbox } = ReactHookForm<SearchAuthorForm>();
	const { trigger, resetField } = useFormContext<SearchAuthorForm>();

	const handleClickReset = () => {
		resetField("category");
	};

	const handleClickApply = () => {
		trigger("category");
	};

	const items = Object.entries(INSTATOON_CATEGORY_NAME_BY_TYPE).map(([instatoonCategoryType, label]) => ({
		instatoonCategoryType,
		label,
	}));

	return (
		<Box width={CATEGORY_BOX_WIDTH}>
			<TextField
				hiddenLabel
				select
				SelectProps={{
					multiple: true,
					value: [],
					displayEmpty: true,
					renderValue: () => ([].length ? [].join(", ") : "카테고리"),
				}}
				size="small"
				label=""
				fullWidth
			>
				<Box
					sx={{
						display: "flex",
						gap: "1rem",
						flexDirection: "column",
						width: CATEGORY_GRID_WIDTH,
						boxShadow: `4px 4px 10px ${grey[200]}`,
					}}
				>
					<Grid container spacing={0} px="1rem">
						{items.map(({ instatoonCategoryType, label }) => (
							<Grid item xs={4} key={instatoonCategoryType} px="1rem">
								<Checkbox
									formName={`category.${instatoonCategoryType as InstatoonCategoryType}`}
									value={instatoonCategoryType}
									label={label}
									hideErrorMessage
								/>
							</Grid>
						))}
					</Grid>
					<Box display="flex" justifyContent="center" gap="3rem">
						<Button variant="outlined" onClick={handleClickReset}>
							해제
						</Button>
						<Button variant="contained" onClick={handleClickApply}>
							적용
						</Button>
					</Box>
				</Box>
			</TextField>
		</Box>
	);
}

export default Category;
