"use client";

import ProfileImage from "@/components/common/profile-image/ProfileImage";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ChangeEventHandler } from "react";

export interface ProfileImageSelectorProps {
	src?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

const VisuallyHiddenInput = styled("input")({
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

function ProfileImageSelector(props: ProfileImageSelectorProps) {
	const { src, onChange } = props;

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
			}}
		>
			{src && <ProfileImage src={src} />}
			<IconButton
				aria-label="select profile image"
				component="label"
				sx={{
					position: "absolute",
					bottom: 0,
					right: 0,
					backgroundColor: `${grey[50]}`,
					opacity: 0.5,
					transition: "0.2s",

					"&:hover": {
						opacity: 0.8,
						backgroundColor: `${grey[50]}`,
					},
				}}
			>
				<EditIcon sx={{ fontSize: "16px" }} />
				<VisuallyHiddenInput type="file" accept="image/*" onChange={onChange} />
			</IconButton>
		</Box>
	);
}

export default ProfileImageSelector;
