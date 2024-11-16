import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    Stack,
    Button,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import RatingStars from "./RatingStars";
import { createReview } from "../../api/classroomAPI"; // 리뷰 생성 API 함수 임포트

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
    overflow: "auto",
};

const RatingModal = ({ open, onClose, classroom, onSubmit }) => {
    const [ratings, setRatings] = useState({
        microphone: 0,
        hygiene: 0,
        airConditioner: 0,
        size: 0,
        overall: 0, // 총 평점
    });
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    const handleRatingChange = (field, value) => {
        setRatings((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        const reviewData = {
            building_name: classroom.Building_title,
            place_name: classroom.Place_title,
            mic_status: ratings.microphone,
            clean_status: ratings.hygiene,
            size_satisfaction: ratings.size,
            air_conditioner_status: ratings.airConditioner,
            rating: ratings.overall,
        };

        try {
            const response = await createReview(reviewData);
            console.log("Review submitted successfully:", response);

            // 부모 컴포넌트에 성공 결과 전달
            onSubmit(response);
            onClose(); // 모달 닫기
        } catch (err) {
            console.error("Failed to submit review:", err);
            setError("리뷰를 제출하는 중 문제가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    {classroom.Building_title} {classroom.Place_title}
                </Typography>
                <Typography variant="subtitle1" mb={2}>
                    강의실 상세 평가
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>마이크 상태</TableCell>
                            <TableCell sx={{ textAlign: "right" }}>
                                <RatingStars
                                    value={ratings.microphone}
                                    onChange={(value) => handleRatingChange("microphone", value)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>위생 상태</TableCell>
                            <TableCell sx={{ textAlign: "right" }}>
                                <RatingStars
                                    value={ratings.hygiene}
                                    onChange={(value) => handleRatingChange("hygiene", value)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>에어컨 상태</TableCell>
                            <TableCell sx={{ textAlign: "right" }}>
                                <RatingStars
                                    value={ratings.airConditioner}
                                    onChange={(value) => handleRatingChange("airConditioner", value)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>크기 만족도</TableCell>
                            <TableCell sx={{ textAlign: "right" }}>
                                <RatingStars
                                    value={ratings.size}
                                    onChange={(value) => handleRatingChange("size", value)}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Typography variant="h6" fontWeight="bold" mt={2} textAlign="center">
                    강의실 총평
                </Typography>
                <Stack justifyContent="center" direction="row" mt={1}>
                    <RatingStars
                        value={ratings.overall}
                        onChange={(value) => handleRatingChange("overall", value)}
                    />
                </Stack>
                {error && (
                    <Typography variant="body2" color="error" textAlign="center" mt={2}>
                        {error}
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "제출 중..." : "완료하기"}
                </Button>
            </Box>
        </Modal>
    );
};

export default RatingModal;
