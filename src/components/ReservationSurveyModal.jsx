import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Divider,
} from "@mui/material";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh", // 모달의 최대 높이
    overflow: "auto", // 내부 스크롤 활성화
};

const ReservationSurveyModal = ({ open, onClose, reservationInfo, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        studentId: "",
        capacity: "",
        purpose: "",
        professorName: "",
        professorPhone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const completeInfo = { ...reservationInfo, ...formData };
        onSubmit(completeInfo || {}); // 예약 정보가 없으면 빈 객체 전달
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    예약하기
                </Typography>
                <Typography mb={1}>
                    <strong>건물/강의실:</strong> {reservationInfo.building} / {reservationInfo.room}
                </Typography>
                <Typography mb={2}>
                    <strong>예약 시간:</strong> {reservationInfo.date} / {reservationInfo.times.join(", ")}교시
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <form>
                    <TextField
                        label="예약자 이름"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="예약자 전화번호"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="예약자 학번"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="사용 인원"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        select
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="30명 미만">30명 미만</MenuItem>
                        <MenuItem value="30명 이상">30명 이상</MenuItem>
                        <MenuItem value="50명 이상">50명 이상</MenuItem>
                    </TextField>
                    <TextField
                        label="사용 목적"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Typography variant="h6" fontWeight="bold" mt={2}>
                        교수님 인적사항
                    </Typography>
                    <TextField
                        label="교수님 이름"
                        name="professorName"
                        value={formData.professorName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="교수님 전화번호"
                        name="professorPhone"
                        value={formData.professorPhone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 3 }}
                        onClick={handleSubmit}
                    >
                        완료하기
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ReservationSurveyModal;
