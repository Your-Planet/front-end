import { IA } from "@/defines/ia/constants";
import { getIaPath } from "@/utils/ia";
import { Box, Divider } from "@mui/material";
import Link from "next/link";

function AccountManagementPanel() {
	return (
		<Box className="flex justify-center items-center text-center mt-8 gap-5">
			<Link href={getIaPath(IA.find.email)} className="text-gray-500 no-underline">
				{IA.find.email.label}
			</Link>
			<Divider orientation="vertical" flexItem />
			<Link href={getIaPath(IA.find.pw)} className="text-gray-500 no-underline">
				{IA.find.pw.label}
			</Link>
			<Divider orientation="vertical" flexItem />
			<Link href={getIaPath(IA.join)} className="text-gray-500 no-underline">
				{IA.join.label}
			</Link>
		</Box>
	);
}

export default AccountManagementPanel;
