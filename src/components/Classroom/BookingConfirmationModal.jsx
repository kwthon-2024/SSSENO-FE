import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
};

const BookingConfirmationModal = ({ open, onClose, reservationInfo }) => {
    if (!reservationInfo) {
        // 예약 정보가 없을 경우 안전하게 처리
        return null;
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    예약 완료
                </Typography>
                <Typography>
                    <strong>건물/강의실:</strong> {reservationInfo.building} / {reservationInfo.room}
                </Typography>
                <Typography>
                    <strong>예약 시간:</strong> {reservationInfo.times.join(", ")}교시
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={onClose}
                >
                    확인
                </Button>
            </Box>
        </Modal>
    );
};

export default BookingConfirmationModal;
