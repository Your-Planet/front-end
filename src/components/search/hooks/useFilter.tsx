import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { SelectChangeEvent } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function useFilter() {
	const router = useRouter();
	const pathname = usePathname();
	const [selectedCategories, setSelectedCategories] = useState<InstatoonCategoryType[]>([]);

	const splitCategoriesFromSearchParams = (searchParams: string) => {
		setSelectedCategories(searchParams.split(",") as InstatoonCategoryType[]);
	};

	const handleChangeCategories = (event: SelectChangeEvent<typeof selectedCategories>) => {
		const categories = event.target.value.toString().split(",");

		setSelectedCategories(categories as InstatoonCategoryType[]);
	};

	const handleClickSearchButton = () => {
		const categories = selectedCategories.join(",");

		router.push(pathname + `?categories=${categories}`, { scroll: false });
	};

	const handleClickResetButton = () => {
		setSelectedCategories([]);

		router.push(pathname + `?categories=`, { scroll: false });
	};

	return {
		selectedCategories,
		splitCategoriesFromSearchParams,
		handleChangeCategories,
		handleClickSearchButton,
		handleClickResetButton,
	};
}

export default useFilter;
