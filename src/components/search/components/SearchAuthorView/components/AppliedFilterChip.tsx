import useRouterPushWithParams from "@/components/search/hooks/useRouterPushWithParams";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Box, Chip } from "@mui/material";
import { useSearchParams } from "next/navigation";

function AppliedFilterChip(props: {}) {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const selectedCategories =
		searchParams
			.get("categories")
			?.split(",")
			.filter((category) => category) ?? [];

	const handleDelete = (deletedCategory: string) => {
		const categories = selectedCategories?.filter((category) => category !== deletedCategory).join(",");

		routerPushWithParams("categories", categories);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: "1rem",
			}}
		>
			{selectedCategories?.map((category) => (
				<Chip
					key={category}
					label={INSTATOON_CATEGORY_NAME_BY_TYPE[category as InstatoonCategoryType]}
					color="primary"
					onDelete={() => handleDelete(category)}
				/>
			))}
		</Box>
	);
}

export default AppliedFilterChip;
