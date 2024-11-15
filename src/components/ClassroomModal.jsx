import React from "react";
import {
    Modal,
    Box,
    Typography,
    IconButton,
    Stack,
    Divider,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RatingStars from "./RatingStars";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // 너비를 화면의 90%로 조정
    maxWidth: "600px", // 최대 너비 제한
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const ClassroomModal = ({ open, onClose, classroom }) => {
    if (!classroom) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{`${classroom.Building_title} ${classroom.Place_title}`}</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <Divider sx={{ my: 2 }} />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
                    {/* 이미지 영역 */}
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "200px" }, // 반응형 너비 조정
                            height: "200px", // 높이 줄이기
                            bgcolor: "#e0e0e0",
                            borderRadius: "8px",
                        }}
                    />

                    {/* 정보 영역 */}
                    <Stack spacing={2} flex={1}>
                        <Typography variant="body1">
                            <strong>수용 인원:</strong> {classroom.capacity}명
                        </Typography>
                        <Typography variant="body1">
                            <strong>강의실 점수:</strong> <RatingStars value={classroom.rating} />
                        </Typography>

                        {/* 강의실 정보 테이블 */}
                        <Typography variant="body1" fontWeight="bold">
                            강의실 정보
                        </Typography>
                        <Table size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell>강의실 형태</TableCell>
                                    <TableCell>계단식</TableCell>
                                    <TableCell>마이크</TableCell>
                                    <TableCell>O</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>프로젝터</TableCell>
                                    <TableCell>X</TableCell>
                                    <TableCell>책상</TableCell>
                                    <TableCell>분리형</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        {/* 강의실 설명 */}
                        <Typography variant="body1" fontWeight="bold">
                            강의실 설명
                        </Typography>
                        <Table size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell>마이크 상태</TableCell>
                                    <TableCell>
                                        <RatingStars value={4} />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>위생 상태</TableCell>
                                    <TableCell>
                                        <RatingStars value={5} />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>에어컨 상태</TableCell>
                                    <TableCell>
                                        <RatingStars value={3} />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>크기 만족도</TableCell>
                                    <TableCell>
                                        <RatingStars value={4} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Stack>
                </Stack>

                {/* 하단 버튼 */}
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                    <Button variant="contained" color="primary">
                        평가하기
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={onClose}>
                        예약하기
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default ClassroomModal;
