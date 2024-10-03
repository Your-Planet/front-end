import { MenuItem } from "@mui/material";

export const getMenuItems = (count: number, endAdornment?: string) => {
	return Array.from({ length: count }, (_, i) => (
		<MenuItem key={i} value={i}>
			{i === 0 ? "추가 안함" : `${i}${endAdornment}`}
		</MenuItem>
	));
};
