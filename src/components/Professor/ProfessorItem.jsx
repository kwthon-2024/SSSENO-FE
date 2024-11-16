import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ProfessorModal from "./ProfessorModal";

const ProfessorItem = ({ professor, onClick }) => {
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
        width: "100%", // 너비를 부모 컨테이너에 맞춤
        maxWidth: "1000px", // 리스트 항목의 최대 너비 제한
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
          src={professor.Professor_photo}
          alt={`${professor.Professor_name} 사진`}
          sx={{
            width: 80, // 이미지 크기 축소
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
              sx={{ ml: 1 }} // 이름과 학과명 간 간격
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
          minWidth: "auto", // 버튼 최소 너비 제거
        }}
        onClick={handleOpenModal}
      >
        상세보기 →
      </Button>

      {/* Modal 연결 */}
      <ProfessorModal open={modalOpen} handleClose={handleCloseModal} professor={professor} />
    </Box>
  );
};

export default ProfessorItem;
