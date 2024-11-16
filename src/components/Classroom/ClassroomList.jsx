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

const ClassroomList = ({ classrooms, onClassroomClick, isLoading }) => {

    if (isLoading) {
        return (
            <Typography variant="body1" align="center" sx={{ mt: 3 }}>
                Loading classrooms...
            </Typography>
        );
    }

    if (!classrooms.length) {
        return (
            <Typography variant="body1" align="center" sx={{ mt: 3 }}>
                No classrooms available.
            </Typography>
        );
    }

    return (
        <TableContainer
            component={Paper}
            sx={{
                boxShadow: 2,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "grey.300",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "grey.100" }}>
                        <TableCell>
                            <Typography fontWeight="bold" color="text.primary">
                                건물
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold" color="text.primary">
                                수용 인원
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold" color="text.primary">
                                강의실
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography fontWeight="bold" color="text.primary">
                                평가
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography fontWeight="bold" color="text.primary">
                                상세보기
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {classrooms.map((classroom, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#fdecec",
                                },
                            }}
                        >
                            <TableCell>{classroom.Building_title}</TableCell>
                            <TableCell>
                                {classroom.capacity ? `${classroom.capacity}명` : "정보 없음"}
                            </TableCell>
                            <TableCell>{classroom.Place_title}</TableCell>
                            <TableCell>
                                <Rating
                                    name="read-only"
                                    value={classroom.rating}
                                    readOnly
                                    size="small"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() => onClassroomClick(classroom)}
                                    sx={{
                                        color: "error.main",
                                        borderColor: "error.main",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "error.light",
                                            color: "white",
                                        },
                                    }}
                                >
                                    상세보기 →
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
