// src/components/Categories.js
import React from 'react';
import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

const Categories = ({ selectedCategory, onCategoryChange }) => {
  const categories = ["전체", "시설", "학사", "기타"];

  return (
    <Box display="flex" gap={2} mb={3}>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "contained" : "outlined"}
          onClick={() => onCategoryChange(category)}
          sx={{
            borderRadius: 2,
            borderColor: selectedCategory === category ? '#b91c1c' : grey[400], // #b91c1c 색상으로 변경
            color: selectedCategory === category ? 'white' : grey[700],
            backgroundColor: selectedCategory === category ? '#b91c1c' : 'white', // 선택된 카테고리 배경 색상
            "&:hover": {
              backgroundColor: selectedCategory === category ? '#9e1d1d' : grey[100], // hover 시 색상 변경
              borderColor: selectedCategory === category ? '#9e1d1d' : grey[400],
            },
            flex: 1, // 가로로 꽉 차게 설정
            px: 2,
            py: 0.8,
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default Categories;
