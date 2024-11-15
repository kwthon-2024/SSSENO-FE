// src/components/NoticeTabs.js
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const NoticeTabs = ({ selectedTab, onTabChange }) => (
  <Box sx={{ mb: 3 }}> {/* 하단 여백 추가 */}
    <Tabs
      value={selectedTab}
      onChange={(event, newValue) => onTabChange(newValue)}
      centered
      TabIndicatorProps={{
        style: {
          backgroundColor: '#b91c1c', // 선택된 탭의 상단에 #b91c1c 색상 표시
          height: '3px', // 상단 빨간색 라인의 두께
        },
      }}
      sx={{
        '& .MuiTab-root': {
          color: grey[700], // 기본 탭 텍스트 색상
          backgroundColor: grey[100], // 기본 탭 배경색
          fontWeight: 'bold',
          flex: 1, // 탭이 가로로 꽉 차게 설정
          maxWidth: 'none', // 기본 최대 너비 제한 해제
        },
        '& .Mui-selected': {
          color: 'black',
          backgroundColor: 'white', // 선택된 탭 배경색
        },
      }}
    >
      <Tab label="답변 미완료 청원" />
      <Tab label="답변 완료 청원" />
    </Tabs>
  </Box>
);

export default NoticeTabs;
