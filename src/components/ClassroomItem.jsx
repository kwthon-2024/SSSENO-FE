import React from "react";
import { Paper, Stack, Typography, Button } from "@mui/material";
import RatingStars from "./RatingStars";

const ClassroomItem = ({ classroom, onDetailClick }) => {
    return (
        <Paper
            sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                boxShadow: 1,
            }}
        >
            <Stack spacing={0.5}>
                {/* 건물 이름과 강의실 번호 */}
                <Typography variant="subtitle1" fontWeight="bold">
                    {classroom.Building_title} {classroom.Place_title}
                </Typography>

                {/* 수용 인원 */}
                <Typography variant="body2" color="text.secondary">
                    수용 인원: {classroom.capacity}명
                </Typography>
            </Stack>

            <Stack spacing={1} alignItems="center">
                {/* 별점 표시 */}
                <RatingStars value={classroom.rating} />

                {/* 상세보기 버튼 */}
                <Button
                    size="small"
                    variant="outlined"
                    onClick={() => onDetailClick(classroom)}
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
            </Stack>
        </Paper>
    );
};

export default ClassroomItem;
