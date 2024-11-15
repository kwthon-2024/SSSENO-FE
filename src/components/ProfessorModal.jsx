import React, { useState } from "react";
import { Modal, Box, Typography, IconButton, Stack, Divider, Button, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import RatingModal from "./RatingModal";
import RadarChart from "./RadarChart";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const ProfessorPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProfessorModal = ({ open, onClose, professor }) => {
    const [ratingModalOpen, setRatingModalOpen] = useState(false);

    const [ratings, setRatings] = useState([0, 0, 0, 0, 0]); // 평가 초기값

    if (!professor) return null;

    const { Professor_name, College, Department, Info = {}, Description, Info: { Subjects = [] } = {} } = professor;

    const handleRatingSubmit = (newRatings) => {
        setRatings(newRatings); // 평가 결과 반영
        setRatingModalOpen(false);
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{Professor_name} 교수</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack direction="row" spacing={4}>
                    <Stack spacing={1} flex={1}>
                        <ProfessorPhoto
                            src={professor.Professor_photo || "https://via.placeholder.com/120"}
                            alt={`${Professor_name} 사진`}
                        />
                        <Typography variant="body1">
                            <strong>전화번호:</strong> {Info?.Number || "정보 없음"}
                        </Typography>
                        <Typography variant="body1">
                            <strong>이메일:</strong> {Info?.Email || "정보 없음"}
                        </Typography>
                        <Typography variant="body1">
                            <strong>사무실:</strong> {Info?.Lab || "정보 없음"}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {Description || "소개 정보 없음"}
                        </Typography>
                    </Stack>
                    <RadarChart data={ratings} />
                </Stack>

                <Divider sx={{ my: 3 }} />



                {/* 진행 중인 수업 */}
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    진행 중인 수업:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    {Subjects.length > 0 ? (
                        Subjects.map((subject, index) => (
                            <Chip key={index} label={subject} color="primary" variant="filled" />
                        ))
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            수업 정보 없음
                        </Typography>
                    )}
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                    {/* 평가하기 버튼 */}
                    <Button variant="contained" color="primary" onClick={() => setRatingModalOpen(true)}>
                        평가하기
                    </Button>

                    {/* 취소하기 버튼 */}
                    <Button variant="outlined" color="secondary" onClick={onClose}>
                        취소하기
                    </Button>
                </Stack>

                <RatingModal
                    open={ratingModalOpen}
                    onClose={() => setRatingModalOpen(false)}
                    onSubmit={handleRatingSubmit}
                />
            </Box>
        </Modal>
    );
};

export default ProfessorModal;
