import React, { useState, useEffect } from "react";
import {
    Modal,
    Box,
    Typography,
    IconButton,
    Stack,
    Divider,
    Button,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ReservationSurveyModal from "./ReservationSurveyModal";
import { fetchRoomDetails } from "../../api/classroomAPI";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "800px",
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const ReservationModal = ({ open, onClose, classroom, onComplete }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [surveyOpen, setSurveyOpen] = useState(false);
    const [possibleTimetable, setPossibleTimetable] = useState([2, 4, 6, 8]); // 임의의 기본 가능한 시간 설정

    useEffect(() => {
        const loadPossibleTimetable = async () => {
            if (classroom) {
                try {
                    const response = await fetchRoomDetails(
                        classroom.Building_title,
                        classroom.Place_title
                    );
                    const timetable = response.data?.[0]?.Possible_timetable || [];
                    setPossibleTimetable(timetable.length ? timetable : [2, 4, 6, 8]); // API 응답 없으면 기본값 유지
                } catch (error) {
                    console.error("강의실 데이터 로드 실패:", error);
                }
            }
        };

        loadPossibleTimetable();
    }, [classroom]);

    const handleTimeChange = (event, newTimes) => {
        setSelectedTimes(newTimes);
    };

    const handleNextStep = () => {
        if (selectedTimes.length > 0) {
            setSurveyOpen(true);
            onClose();
        } else {
            alert("예약 시간을 선택해주세요!");
        }
    };

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box sx={modalStyle}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">
                            {classroom?.Building_title} {classroom?.Place_title}
                        </Typography>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ my: 2 }} />

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
                        <Box
                            sx={{
                                width: { xs: "100%", sm: "50%" },
                                height: "300px",
                                bgcolor: "#e0e0e0",
                                borderRadius: "8px",
                            }}
                        />

                        <Box sx={{ flex: 1 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={selectedDate}
                                    onChange={(newValue) => setSelectedDate(newValue)}
                                    renderInput={(params) => <Box sx={{ display: "none" }} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Stack>

                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 3, mb: 1, textAlign: "center" }}
                    >
                        시간 선택
                    </Typography>
                    <ToggleButtonGroup
                        value={selectedTimes}
                        onChange={handleTimeChange}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {Array.from({ length: 9 }, (_, i) => i + 1).map((time) => (
                            <ToggleButton
                                key={time}
                                value={time}
                                disabled={!possibleTimetable.includes(time)}
                                sx={{
                                    border: "1px solid #1976d2",
                                    color: "#1976d2",
                                    padding: "10px 20px",
                                    minWidth: "70px",
                                    fontWeight: "bold",
                                    "&.Mui-selected": {
                                        bgcolor: "#1976d2",
                                        color: "white",
                                    },
                                    "&:hover": {
                                        bgcolor: !possibleTimetable.includes(time)
                                            ? undefined
                                            : "#d1e5f7",
                                    },
                                }}
                            >
                                {time}교시
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 3, py: 1.5 }}
                        onClick={handleNextStep}
                    >
                        다음
                    </Button>
                </Box>
            </Modal>

            <ReservationSurveyModal
                open={surveyOpen}
                onClose={() => setSurveyOpen(false)}
                reservationInfo={{
                    building: classroom?.Building_title,
                    room: classroom?.Place_title,
                    date: selectedDate.toISOString().split("T")[0],
                    times: selectedTimes,
                }}
                onSubmit={(info) => onComplete(info)}
            />
        </>
    );
};

export default ReservationModal;
