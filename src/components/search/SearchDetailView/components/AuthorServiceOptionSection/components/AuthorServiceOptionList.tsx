import { Check as CheckIcon } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";

export interface AuthorServiceOptionListProps {
	title: string;
	serviceOptions: string[];
}

const StyledUl = styled("ul")`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 12px;
`;

function AuthorServiceOptionList(props: AuthorServiceOptionListProps) {
	const { title, serviceOptions } = props;

	return (
		<Box>
			<Typography variant="h5" fontWeight={500}>
				{title}
			</Typography>
			<StyledUl>
				{serviceOptions.map((option, i) => (
					<li key={i}>
						<Box
							sx={{
								display: "flex",
								gap: "12px",
								alignItems: "center",
							}}
						>
							<CheckIcon sx={{ fontSize: 18 }} />
							<Typography fontSize={18}>{option}</Typography>
						</Box>
					</li>
				))}
			</StyledUl>
		</Box>
	);
}

export default AuthorServiceOptionList;
