// src/components/SearchBar.js
import React, { useState } from "react";
import { Box, Select, MenuItem, TextField, Button, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PetitionModal from "./PetitionModal";

const SearchBar = ({ onAddPetition, onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("제목");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    onSearch(searchQuery, searchOption);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'grey.100',
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        p: 2,
        mb: 3,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body1" fontWeight="bold" color="text.primary" sx={{ mr: 1 }}>
            Search
          </Typography>
          <Select
            value={searchOption}
            onChange={(e) => setSearchOption(e.target.value)}
            variant="outlined"
            sx={{
              height: 36, // 높이 통일
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey.400",
              },
              "& .MuiSelect-select": {
                padding: "8px 12px", // 내부 여백 축소
              },
            }}
          >
            <MenuItem value="전체">전체</MenuItem>
            <MenuItem value="제목">제목</MenuItem>
            <MenuItem value="내용">내용</MenuItem>
          </Select>
          <TextField
            variant="outlined"
            placeholder="검색어를 입력해 주세요."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              width: 300,
              height: 36, // 높이 통일
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey.400",
              },
              "& .MuiInputBase-input": {
                padding: "6px 12px", // 내부 여백 축소
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="text" sx={{ minWidth: "auto", p: 0 }} onClick={handleSearch}>
                    <SearchIcon color="action" />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* 작성하기 버튼 */}
        <Button
          variant="outlined"
          color="error"
          onClick={handleOpenModal}
          sx={{
            px: 1.5,
            py: 0.5,
            borderColor: "error.main",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#b91c1c",
              color: "white",
            },
            height: 36, // 버튼 높이 통일
          }}
          startIcon={<SearchIcon />}
        >
          작성하기
        </Button>
      </Box>

      {/* PetitionModal */}
      <PetitionModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        onSave={onAddPetition}
      />
    </Box>
  );
};

export default SearchBar;
