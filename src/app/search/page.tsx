import React from "react";
import Search from "@/components/Search";
import ScrollDownSection from "@/components/Search/ScrollDownSection";
import Image from "next/image";

const SearchPage = () => {
	return (
		<>
			<div className="w-full h-screen relative flex items-center p-10">
				<Image
					className="w-full h-full object-cover z-[-1]"
					src="/images/search-banner.png"
					alt="search-banner"
					fill
					draggable={false}
				/>
				<Search />
			</div>
			<ScrollDownSection />
		</>
	);
};

export default SearchPage;
