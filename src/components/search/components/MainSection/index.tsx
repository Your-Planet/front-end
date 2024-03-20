import AuthorCard from "@/components/search/components/AuthorCard";
import { GenreType } from "@/components/search/defines/types";
import { genreState, sortOptionState } from "@/recoil/selectors/search";
import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";

type Props = {};

function MainSection(props: Props) {
	const selectedGenre = useRecoilValue(genreState);
	const selectedSortOption = useRecoilValue(sortOptionState);

	const getAuthorCards = () => {
		const authors = [
			{
				authorName: "망그러진곰1",
				profilePictureUrl: "",
				instagramId: "yurang_official1",
				genre: ["ALL", "DAILY"] as GenreType[],
				createdAt: new Date("2024-01-22"),
				likes: 25,
			},
			{
				authorName: "망그러진곰2",
				profilePictureUrl: "",
				instagramId: "yurang_official2",
				genre: ["ALL", "DATE"] as GenreType[],
				createdAt: new Date("2023-01-04"),
				likes: 1,
			},
			{
				authorName: "망그러진곰3",
				profilePictureUrl: "",
				instagramId: "yurang_official3",
				genre: ["ALL", "HEALING"] as GenreType[],
				createdAt: new Date("2023-11-10"),
				likes: 30,
			},
			{
				authorName: "망그러진곰4",
				profilePictureUrl: "",
				instagramId: "yurang_official4",
				genre: ["ALL", "HUMOR"] as GenreType[],
				createdAt: new Date("2022-05-06"),
				likes: 6,
			},
			{
				authorName: "망그러진곰5",
				profilePictureUrl: "",
				instagramId: "yurang_official5",
				genre: ["ALL", "DAILY"] as GenreType[],
				createdAt: new Date("2023-11-02"),
				likes: 9,
			},
			{
				authorName: "망그러진곰6",
				profilePictureUrl: "",
				instagramId: "yurang_official6",
				genre: ["ALL", "DATE"] as GenreType[],
				createdAt: new Date("2023-08-05"),
				likes: 0,
			},
			{
				authorName: "망그러진곰7",
				profilePictureUrl: "",
				instagramId: "yurang_official7",
				genre: ["ALL", "HUMOR"] as GenreType[],
				createdAt: new Date("2022-08-15"),
				likes: 15,
			},
			{
				authorName: "망그러진곰8",
				profilePictureUrl: "",
				instagramId: "yurang_official8",
				genre: ["ALL", "HEALING"] as GenreType[],
				createdAt: new Date("2022-11-28"),
				likes: 5,
			},
			{
				authorName: "망그러진곰9",
				profilePictureUrl: "",
				instagramId: "yurang_official9",
				genre: ["ALL", "DAILY"] as GenreType[],
				createdAt: new Date("2023-03-12"),
				likes: 12,
			},
			{
				authorName: "망그러진곰10",
				profilePictureUrl: "",
				instagramId: "yurang_official10",
				genre: ["ALL", "HUMOR"] as GenreType[],
				createdAt: new Date("2023-07-19"),
				likes: 8,
			},
			{
				authorName: "망그러진곰11",
				profilePictureUrl: "",
				instagramId: "yurang_official11",
				genre: ["ALL", "HEALING"] as GenreType[],
				createdAt: new Date("2022-12-05"),
				likes: 18,
			},
			{
				authorName: "망그러진곰12",
				profilePictureUrl: "",
				instagramId: "yurang_official12",
				genre: ["ALL", "DAILY"] as GenreType[],
				createdAt: new Date("2023-04-27"),
				likes: 7,
			},
		];

		const filteredAuthorsBySelectedTab = authors.filter((author) => author.genre.includes(selectedGenre));
		const sortedAuthorsBySelectedSortOption = filteredAuthorsBySelectedTab.sort((a, b) => {
			switch (selectedSortOption) {
				case "POPULARITY":
					return b.likes - a.likes;
				case "LATEST":
					return b.createdAt.getTime() - a.createdAt.getTime();
				case "ALPHABETICAL":
					return a.authorName.localeCompare(b.authorName);
				default:
					return 0;
			}
		});

		return sortedAuthorsBySelectedSortOption.map((author) => {
			const { authorName, profilePictureUrl, instagramId, genre, createdAt, likes } = author;

			return (
				<Grid item xs={4} key={instagramId}>
					<AuthorCard
						authorName={authorName}
						profilePictureUrl={profilePictureUrl}
						instagramId={instagramId}
						genre={genre}
						createdAt={createdAt}
						likes={likes}
					/>
				</Grid>
			);
		});
	};
	return (
		<Grid className="py-10" container spacing={2} justifyContent="start" alignItems="center">
			{getAuthorCards()}
		</Grid>
	);
}

export default MainSection;
