import React from "react";
import styled from "styled-components";
import ProfessorItem from "./ProfessorItem";
import { Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Add larger spacing between list items */
  padding: 20px; /* Add padding around the entire container */
  background-color: #fef2f2; /* Light red color slightly lighter than #b91c1c */
  border-radius: 8px; /* Add rounded corners to the container */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
`;

const ProfessorList = ({ professors, onProfessorClick }) => {
    return (
        <Stack spacing={2}>
            {professors.length > 0 ? (
                professors.map((professor) => (
                    <ProfessorItem key={professor.Professor_id} professor={professor} onClick={onProfessorClick} />
                ))
            ) : (
                <Typography variant="body1" color="text.secondary">
                    검색 결과가 없습니다.
                </Typography>
            )}
        </Stack>
    );
};

export default ProfessorList;
