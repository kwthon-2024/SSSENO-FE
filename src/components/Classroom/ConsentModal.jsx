import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

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
    textAlign: "center",
};

const ConsentModal = ({ open, onAgree, onDisagree }) => (
    <Modal open={open} onClose={onDisagree}>
        <Box sx={modalStyle}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
                * 사용자 준수 사항 *
            </Typography>
            <Typography variant="body2" mb={3} textAlign="left">
                1. 상기 장소를 사용하는 데 있어 발생하는 기자재의 고장, 분실, 훼손 등에 대한 책임은 사용자에게 있습니다.
                <br />
                2. 강의실은 강의에 우선 배정함을 양지하여 주시기 바랍니다.
                <br />
                3. 상기 장소를 사용하는 데 있어 발생하는 기자재의 고장, 분실, 훼손 등에 대한 책임은 사용자에게 있습니다.
                <br />
                4. 강의실은 강의에 우선 배정함을 양지하여 주시기 바랍니다.
                <br />
                ...
            </Typography>

            <Box
                sx={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    p: 2,
                    textAlign: "left",
                    mb: 3,
                }}
            >
                <Typography variant="subtitle2" fontWeight="bold">
                    [개인 정보 수집 및 동의]
                </Typography>
                <Typography variant="body2">
                    - 개인 정보 수집 및 이용 목적: 강의실 대여
                    <br />
                    - 수집 항목: 성명, 연락처
                    <br />
                    - 보유 및 이용 기간: 신청일로부터 3개월
                    <br />
                    - 동의 거부권 안내: 본 개인 정보 수집에 대한 동의를 거부할 수 있으며, 이 경우 강의실 대여가 제한될 수
                    있습니다.
                </Typography>
            </Box>

            <Box display="flex" justifyContent="center" gap={2}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={onAgree}
                >
                    동의
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={onDisagree}
                >
                    비동의
                </Button>
            </Box>
        </Box>
    </Modal>
);

export default ConsentModal;
