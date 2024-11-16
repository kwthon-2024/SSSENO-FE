import React, { useState, useEffect } from "react";
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
    CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RatingStars from "./RatingStars";
import ReservationModal from "./ReservationModal";
import ConsentModal from "./ConsentModal";
import BookingConfirmationModal from "./BookingConfirmationModal";
import RatingModal from "./RatingModal";
import CompleteModal from "./RatingCompleteModal";
import { fetchRoomDetails, fetchRoomReview } from "../../api/classroomAPI"; // API 함수 추가

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
};

const ClassroomModal = ({ open, onClose, classroom }) => {
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomReview, setRoomReview] = useState(null);
    const [isReservationOpen, setReservationOpen] = useState(false); // 예약 모달
    const [isConsentOpen, setConsentOpen] = useState(false); // 동의 모달
    const [isConfirmationOpen, setConfirmationOpen] = useState(false); // 확인 모달
    const [reservationInfo, setReservationInfo] = useState({
        building: "",
        room: "",
        times: [],
        date: "",
    });
    const [isRatingOpen, setRatingOpen] = useState(false); // 평가 모달
    const [isCompleteOpen, setCompleteOpen] = useState(false); // 완료 모달
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // Error 상태 변수 선언

    const handleRatingSubmit = () => {
        setRatingOpen(false);
        setCompleteOpen(true);
    };

    const onReservationComplete = (info) => {
        setReservationOpen(false);
        setReservationInfo(info || {});
        setConsentOpen(true);
    };

    const onConsentAgree = () => {
        setConsentOpen(false);
        setConfirmationOpen(true);
    };

    useEffect(() => {
        const loadRoomData = async () => {
            if (!classroom || !open) return;

            try {
                setIsLoading(true);
                setError(null);

                const detailsResponse = await fetchRoomDetails(
                    classroom.Building_title,
                    classroom.Place_title
                );

                setRoomDetails(detailsResponse.data || {});

                const reviewResponse = await fetchRoomReview(
                    classroom.Building_title,
                    classroom.Place_title
                );

                setRoomReview(reviewResponse || {});
            } catch (err) {
                console.error("Failed to load data:", err);
                setError("Failed to load room data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        loadRoomData();
    }, [classroom, open]);




    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box sx={modalStyle}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">
                            {`${classroom.Building_title} ${classroom.Place_title}`}
                        </Typography>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ my: 2 }} />

                    {isLoading ? (
                        <Stack alignItems="center" justifyContent="center" sx={{ minHeight: "200px" }}>
                            <CircularProgress />
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                Loading room details...
                            </Typography>
                        </Stack>
                    ) : (
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
                            {/* 이미지 영역 */}
                            <Box
                                sx={{
                                    width: { xs: "100%", sm: "200px" },
                                    height: "200px",
                                    bgcolor: "#e0e0e0",
                                    borderRadius: "8px",
                                }}
                            />

                            {/* 정보 영역 */}
                            <Stack spacing={2} flex={1}>
                                {/* 수용 인원 */}
                                <Typography variant="body1">
                                    <strong>수용 인원:</strong> {roomDetails?.capacity || "정보 없음"}명
                                </Typography>

                                {/* 강의실 점수 */}
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Typography variant="body1">
                                        <strong>강의실 점수:</strong>
                                    </Typography>
                                    <RatingStars value={roomDetails?.rating || 0} readOnly />
                                </Stack>

                                {/* 강의실 정보 테이블 */}
                                <Typography variant="body1" fontWeight="bold">
                                    강의실 정보
                                </Typography>
                                <Table size="small">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>강의실 형태</TableCell>
                                            <TableCell>{roomDetails?.type || "정보 없음"}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>마이크</TableCell>
                                            <TableCell>{roomDetails?.has_mic ? "O" : "X"}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>프로젝터</TableCell>
                                            <TableCell>{roomDetails?.has_projector ? "O" : "X"}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>책상</TableCell>
                                            <TableCell>{roomDetails?.desk_type || "정보 없음"}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                {/* 강의실 상세 평가 */}
                                <Typography variant="body1" fontWeight="bold">
                                    강의실 상세 평가
                                </Typography>
                                <Table size="small">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>마이크 상태</TableCell>
                                            <TableCell sx={{ textAlign: "right" }}>
                                                <RatingStars value={roomReview?.mic_status || 0} readOnly />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>위생 상태</TableCell>
                                            <TableCell sx={{ textAlign: "right" }}>
                                                <RatingStars value={roomReview?.clean_status || 0} readOnly />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>에어컨 상태</TableCell>
                                            <TableCell sx={{ textAlign: "right" }}>
                                                <RatingStars
                                                    value={roomReview?.air_conditioner_status || 0}
                                                    readOnly
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>크기 만족도</TableCell>
                                            <TableCell sx={{ textAlign: "right" }}>
                                                <RatingStars
                                                    value={roomReview?.size_satisfaction || 0}
                                                    readOnly
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Stack>
                        </Stack>
                    )}
                    {/* 하단 버튼 */}
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setRatingOpen(true)}
                        >
                            평가하기
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => setReservationOpen(true)}
                        >
                            예약하기
                        </Button>
                    </Stack>
                </Box>
            </Modal>
            {/* 예약 모달 */}
            <ReservationModal
                open={isReservationOpen}
                onClose={() => setReservationOpen(false)}
                classroom={classroom}
                onComplete={onReservationComplete} // 예약 완료 후 호출
            />

            {/* 동의 모달 */}
            <ConsentModal
                open={isConsentOpen}
                onAgree={onConsentAgree} // 동의 후 확인 모달 열기
                onDisagree={() => setConsentOpen(false)}
            />

            {/* 확인 모달 */}
            <BookingConfirmationModal
                open={isConfirmationOpen}
                onClose={() => {
                    setConfirmationOpen(false); // 확인 모달 닫기
                    onClose(); // 전체 프로세스 종료
                }}
                reservationInfo={reservationInfo} // 예약 정보 전달
            />

            {/* 평가 모달 */}
            <RatingModal
                open={isRatingOpen}
                onClose={() => setRatingOpen(false)}
                classroom={classroom}
                onSubmit={handleRatingSubmit}
            />

            {/* 완료 안내 모달 */}
            <CompleteModal
                open={isCompleteOpen}
                onClose={() => setCompleteOpen(false)}
            />
        </>
    );
};

export default ClassroomModal;
