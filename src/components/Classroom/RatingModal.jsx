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
    overflow: "auto", // 스크롤 가능
};

const RatingModal = ({ open, onClose, classroom, onSubmit }) => {
    const [ratings, setRatings] = useState({
        microphone: 0,
        hygiene: 0,
        airConditioner: 0,
        size: 0,
        overall: 0, // 총 평점도 별도로 입력 가능
    });

    const handleRatingChange = (field, value) => {
        setRatings((prev) => ({ ...prev, [field]: value })); // 독립적으로 상태 업데이트
    };

    const handleSubmit = () => {
        console.log("평가 결과:", ratings);
        onSubmit(); // 완료 모달 호출
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
                        onChange={(value) => handleRatingChange("overall", value)} // 총 평점도 별도 입력 가능
                    />
                </Stack>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={handleSubmit}
                >
                    완료하기
                </Button>
            </Box>
        </Modal>
    );
};

export default RatingModal;
