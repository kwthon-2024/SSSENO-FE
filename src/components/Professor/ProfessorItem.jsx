import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ProfessorModal from "./ProfessorModal";

const ProfessorItem = ({ professor }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 2,
        p: 2,
        width: "100%",
        maxWidth: "1000px",
        "&:hover": {
          borderColor: "error.light",
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* 이미지 및 텍스트 */}
      <Box display="flex" gap={2}>
        <Box
          component="img"
          src={professor.Professor_photo || "https://via.placeholder.com/80"}
          alt={`${professor.Professor_name} 사진`}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 1,
            objectFit: "cover",
          }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}
          >
            {professor.Professor_name} 교수{" "}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ ml: 1 }}
            >
              / {professor.Department}
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, whiteSpace: "pre-line" }}
          >
            {professor.Description}
          </Typography>
        </Box>
      </Box>

      {/* 상세보기 버튼 */}
      <Button
        variant="text"
        color="error"
        size="small"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          minWidth: "auto",
        }}
        onClick={handleOpenModal}
      >
        상세보기 →
      </Button>

      {/* Modal 연결 */}
      <ProfessorModal open={modalOpen} onClose={handleCloseModal} professor={professor} />
    </Box>
  );
};

export default ProfessorItem;
