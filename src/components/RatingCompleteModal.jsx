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

const CompleteModal = ({ open, onClose }) => (
    <Modal open={open} onClose={onClose}>
        <Box sx={modalStyle}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
                평가 완료
            </Typography>
            <Typography mb={3}>
                평가가 정상적으로 완료되었습니다. 감사합니다!
            </Typography>
            <Button variant="contained" color="primary" onClick={onClose}>
                확인
            </Button>
        </Box>
    </Modal>
);

export default CompleteModal;
