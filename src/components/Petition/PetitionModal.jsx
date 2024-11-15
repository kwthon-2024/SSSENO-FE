import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Modal,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

const PetitionModal = ({ open, handleClose, onSave, existingData = null }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("시설");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (existingData) {
      setTitle(existingData.Complaint_title || "");
      setCategory(existingData.Category || "시설");
      setDescription(existingData.Description || "");
    } else {
      setTitle("");
      setCategory("시설");
      setDescription("");
    }
  }, [existingData]);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newPetition = {
      Petition_id: Date.now(), // 유니크한 ID 생성
      Complaint_title: title,
      Category: category,
      Description: description,
      Answer: null, // 초기값
    };

    onSave(newPetition); // 부모 컴포넌트로 데이터 전달
    handleClose(); // 모달 닫기
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{existingData ? "청원 수정" : "청원 등록"}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 2 }} />

        <Stack spacing={3}>
          <TextField
            fullWidth
            label="제목"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            select
            label="카테고리"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="시설">시설</MenuItem>
            <MenuItem value="기타">기타</MenuItem>
            <MenuItem value="학사">학사</MenuItem>
            <MenuItem value="행사">행사</MenuItem>
            <MenuItem value="등록/장학">등록/장학</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="내용"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {existingData ? "수정" : "등록"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            취소
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default PetitionModal;
