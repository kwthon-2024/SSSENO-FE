import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Rating,
    Typography,
} from "@mui/material";

const ClassroomList = ({ classrooms, onClassroomClick }) => {
    return (
        <TableContainer component={Paper} sx={{ boxShadow: 1, borderRadius: 2 }}>
            <Table>
                {/* 테이블 헤더 */}
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                        <TableCell>
                            <Typography fontWeight="bold">건물</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold">수용 인원</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold">강의실</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold">평가</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography fontWeight="bold">상세보기</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                {/* 테이블 본문 */}
                <TableBody>
                    {classrooms.map((classroom, index) => (
                        <TableRow key={index}>
                            {/* 건물 */}
                            <TableCell>{classroom.Building_title}</TableCell>
                            {/* 수용 인원 */}
                            <TableCell>
                                {classroom.capacity ? `${classroom.capacity}명` : "정보 없음"}
                            </TableCell>

                            {/* 강의실 번호 */}
                            <TableCell>{classroom.Place_title}</TableCell>
                            {/* 별점 */}
                            <TableCell>
                                <Rating name="read-only" value={classroom.rating} readOnly size="small" />
                            </TableCell>
                            {/* 상세보기 버튼 */}
                            <TableCell align="center">
                                <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => onClassroomClick(classroom)}
                                    sx={{
                                        borderColor: "#1976d2",
                                        color: "#1976d2",
                                        "&:hover": {
                                            backgroundColor: "#e3f2fd",
                                            borderColor: "#1976d2",
                                        },
                                    }}
                                >
                                    상세보기 &gt;
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ClassroomList;
