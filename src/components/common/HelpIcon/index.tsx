import { Box } from '@mui/material'
import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { PRIMARY_COLOR } from '@/defines/common/constants';

function HelpIcon() {
	return (
		<Box className="flex w-fit ml-1">
					<HelpOutlineIcon
						className="cursor-pointer"
						fontSize="small"
						color="disabled"
						sx={{ "&:hover": { color: PRIMARY_COLOR } }}
					/>
				</Box>
	)
}

export default HelpIcon