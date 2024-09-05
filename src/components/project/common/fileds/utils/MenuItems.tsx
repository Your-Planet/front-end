import { MenuItem } from "@mui/material";

export const getMenuItems = (count: number, endAdornment?: string) => {
	// TODO @나은찬, need to add some type for key and value
	return Array.from({ length: count }, (_, i) => (
		<MenuItem key={i} value={i}>
			{i === 0 ? "추가 안함" : `${i}${endAdornment}`}
		</MenuItem>
	));
};
