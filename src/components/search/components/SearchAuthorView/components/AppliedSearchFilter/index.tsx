import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Box, Chip } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function AppliedSearchFilter(props: {}) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const selectedCategories = searchParams.get("categories")?.split(",") ?? [];

	const handleDelete = (deletedCategory: string) => {
		const categories = selectedCategories?.filter((category) => category !== deletedCategory).join(",");

		if (categories) {
			router.push(`${pathname}?categories=${encodeURIComponent(categories)}`, { scroll: false });
		} else {
			router.push(`${pathname}`, { scroll: false });
		}
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

export default AppliedSearchFilter;
