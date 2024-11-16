import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProfessorItem from "./ProfessorItem";

const ProfessorList = ({ professors, onProfessorClick }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // 리스트 중앙 정렬
                gap: 2,
            }}
        >
            {professors.length > 0 ? (
                professors.map((professor) => (
                    <ProfessorItem
                        key={professor.Professor_id}
                        professor={professor}
                        onClick={onProfessorClick}
                    />
                ))
            ) : (
                <Typography variant="body1" color="text.secondary">
                    검색 결과가 없습니다.
                </Typography>
            )}
        </Box>
    );
};

export default ProfessorList;
