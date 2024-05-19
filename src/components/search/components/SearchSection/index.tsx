import FilterSection from "@/components/search/components/SearchSection/components/FilterSection";
import Header from "@/components/search/components/SearchSection/components/Header";
import SortSection from "@/components/search/components/SearchSection/components/SortSection";
import { Box } from "@mui/material";

type Props = {};

function SearchSection({}: Props) {
	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<FilterSection />
				<SortSection />
			</Box>
		</Box>
	);
}

export default SearchSection;
