"use client";

import { PRIMARY_COLOR } from "@/defines/common/constants";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DEFAULT_OF_PORTFOLIO_LINK, LIMIT_OF_PORTFOLIO_LINK } from "../../defines/common/constants";

const PortfolioLinkField = () => {
	const [links, setLinks] = useState<Array<String>>(Array.from({ length: DEFAULT_OF_PORTFOLIO_LINK }, () => ""));

	const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) => {
		const link = event.target.value;
		const onChangeLinks = [...links];
		onChangeLinks[index] = link;
		setLinks(onChangeLinks);
	};

	const handleAddInputField = () => {
		setLinks([...links, ""]);
	};

	const handleDeleteInputField = (index: number) => {
		const newLinks = [...links];
		newLinks.splice(index, 1);
		setLinks(newLinks);
	};

	return (
		<Box className="flex flex-col w-[50vw] pt-5">
			<Box className="flex items-center">
				<Typography variant="subtitle1">인스타툰 포트폴리오 링크</Typography>
				<Box className="flex w-fit ml-1">
					<HelpOutlineIcon
						className="cursor-pointer"
						fontSize="small"
						color="disabled"
						sx={{ "&:hover": { color: PRIMARY_COLOR } }}
					/>
				</Box>
			</Box>
			<Box className="flex justify-end">
				<Link
					className="flex w-fit"
					href="https://www.instagram.com/"
					variant="body2"
					target="_blank"
					rel="noopener noreferrer"
					underline="hover"
				>
					<Typography variant="caption">인스타그램 바로가기</Typography>
					<InstagramIcon fontSize="small" />
				</Link>
			</Box>
			{links.map((link, index) => (
				<Box key={index}>
					<Box className="flex items-center">
						<TextField
							label="링크"
							margin="normal"
							size="small"
							fullWidth
							value={link}
							onChange={(event) => handleChangeInput(event, index)}
						/>
						{links.length > DEFAULT_OF_PORTFOLIO_LINK && (
							<RemoveCircleOutlineIcon
								className="cursor-pointer mt-2"
								color="disabled"
								sx={{ "&:hover": { color: PRIMARY_COLOR } }}
								onClick={() => handleDeleteInputField(index)}
							/>
						)}
					</Box>
					{index === links.length - 1 && links.length < LIMIT_OF_PORTFOLIO_LINK && (
						<Box className="flex justify-center">
							<ControlPointIcon
								className="cursor-pointer"
								color="disabled"
								sx={{ "&:hover": { color: PRIMARY_COLOR } }}
								onClick={() => handleAddInputField()}
							/>
						</Box>
					)}
				</Box>
			))}
		</Box>
	);
};

export default PortfolioLinkField;
