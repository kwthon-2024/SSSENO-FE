import React, { useState } from "react";
import { Paper, Stack, Typography, Button, Box } from "@mui/material";
import ProfessorModal from "./ProfessorModal";

const ProfessorItem = ({ professor, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Paper
      sx={{
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 1,
        border: "1px solid #e0e0e0",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          src={professor.Professor_photo}
          alt={`${professor.Professor_name} 사진`}
          sx={{
            width: 64,
            height: 64,
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
        <Stack>
          <Typography variant="subtitle1" fontWeight="bold">
            {professor.Professor_name} 교수
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {professor.Department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {professor.Description}
          </Typography>
        </Stack>
      </Stack>
      <Button size="small" variant="outlined" color="primary" onClick={() => onClick(professor)}>
        상세보기 &gt;
      </Button>
    </Paper>
  );
};

export default ProfessorItem;
