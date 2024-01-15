"use client";

import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
	Box,
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	TextField,
	Typography,
} from "@mui/material";

import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

type Props = {};

function Request({}: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const [selectedDates, setSelectedDates] = useState<Set<String>>(new Set<String>());
	const oneDay = 86400000;

	const handleClickSend = () => {
		setOpen(true);
	};

	const handleCloseSend = () => {
		setOpen(false);
	};

	const handleClickDate = (date: DateClickArg) => {
		setSelectedDates((prevSelectedDates) => {
			const newSelectedDates = new Set(prevSelectedDates);
			if (newSelectedDates.has(date.dateStr)) {
				newSelectedDates.delete(date.dateStr);
				date.dayEl.style.backgroundColor = "transparent";
			} else {
				newSelectedDates.add(date.dateStr);
				date.dayEl.style.backgroundColor = "lightblue";
			}
			return newSelectedDates;
		});
	};

	const getDatesBetween = (start: Date, end: Date): string[] => {
		const dates = [];
		const currentDate = new Date(start.getTime() + oneDay);

		while (currentDate <= end) {
			dates.push(currentDate.toISOString().split("T")[0]);
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return dates;
	};

	return (
		<Box className="flex w-full h-except-header px-20 py-5 flex-col">
			<Typography className="font-bold mb-2" variant="h6">
				문의하기
			</Typography>
			<Divider color="black" />
			<Box className="flex shrink w-full h-full mt-5 justify-between">
				<Box className="w-1/2 h-full">
					<FullCalendar
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
						initialView="dayGridMonth"
						events={[]}
						height="100%"
						themeSystem="bootstrap5"
						selectable
						dateClick={handleClickDate}
					/>
				</Box>
				<Divider orientation="vertical" flexItem />
				<Box className="flex w-[40%]">
					<Box className="w-full">
						<TextField
							label="광고 희망 날짜를 선택해주세요"
							placeholder="달력에서 날짜를 선택하세요"
							fullWidth
							multiline
							rows={3}
							InputProps={{
								readOnly: true,
							}}
							focused
							size="small"
							margin="normal"
							defaultValue={Array.from(selectedDates).sort().join(", ")}
						/>
						<TextField
							label="작가님에게 남길 메세지를 입력하세요"
							focused
							fullWidth
							multiline
							rows={3}
							size="small"
							margin="normal"
						/>
						<Box className="mt-3">
							<FormControl component="fieldset">
								<FormLabel component="legend">광고 분류</FormLabel>
								<FormGroup row>
									<FormControlLabel value="online" control={<Checkbox />} label="온라인" labelPlacement="end" />
									<FormControlLabel value="offline" control={<Checkbox />} label="오프라인" labelPlacement="end" />
								</FormGroup>
							</FormControl>
						</Box>
						<Box className="mt-3">
							<FormControl component="fieldset">
								<FormLabel component="legend">업로드 형태</FormLabel>
								<FormGroup row>
									<FormControlLabel value="instagram_feed" control={<Checkbox />} label="피드" labelPlacement="end" />
									<FormControlLabel value="instagram_shorts" control={<Checkbox />} label="쇼츠" labelPlacement="end" />
									<FormControlLabel value="instagram_live" control={<Checkbox />} label="라이브" labelPlacement="end" />
								</FormGroup>
							</FormControl>
						</Box>
						<Box className="flex w-full flex-row-reverse">
							<Dialog open={open} onClose={handleCloseSend}>
								<DialogContent>
									<DialogContentText>작성하신 내용으로 작가님에게 문의하시겠습니까?</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button variant="contained" color="error" onClick={handleCloseSend}>
										취소
									</Button>
									<Button onClick={handleCloseSend} variant="contained" color="primary">
										확인
									</Button>
								</DialogActions>
							</Dialog>
							<Box className="flex">
								<Button className="mx-2" variant="contained" color="error">
									뒤로가기
								</Button>
								<Button variant="contained" color="primary" onClick={handleClickSend}>
									보내기
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Request;
