import { Button } from "@mui/material";

const SearchButton = () => {
	return (
		<Button className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold mt-2">
			<div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
			<div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
			<div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
			<div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
			<p className="z-10">작가 찾기</p>
		</Button>
	);
};

export default SearchButton;
