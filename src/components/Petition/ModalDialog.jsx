import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalDialog = ({ open, handleClose, petition }) => (
  <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
    <Box sx={{ padding: "16px 24px" }}>
      {/* 제목 및 닫기 버튼 */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {petition?.Complaint_title || "제목 없음"}
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <DialogContent sx={{ padding: "24px" }}>
        {/* 청원 기본 정보 */}
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {petition?.Category || "미정"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          청원 진행 일자: 2024.11.14 ~ 2024.12.14
        </Typography>

        {/* 청원 내용 */}
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          {petition?.Description || "내용 없음"}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 답변 정보 */}
        <Typography variant="h6" gutterBottom>
          총학생회의 답변
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          청원 답변 일자: {petition?.answer?.date || "아직 답변되지 않았습니다."}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            lineHeight: 1.6,
          }}
        >
          {petition?.answer?.contents || "아직 답변되지 않았습니다."}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 참여 인원 */}
        <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            👥 참여 중인 학생 : {petition?.Gachucount || "0"}명
          </Typography>
        </Box>
      </DialogContent>

      {/* 하단 버튼 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "16px",
          backgroundColor: "grey.100",
        }}
      >
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundColor: "#b91c1c",
            color: "white",
            "&:hover": { backgroundColor: "#9e1d1d" },
            fontWeight: "bold",
            px: 4,
          }}
        >
          닫기
        </Button>
      </Box>
    </Box>
  </Dialog>
);

export default ModalDialog;
