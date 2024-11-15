import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import StatusFlow from './StatusFlow';
import ModalDialog from './ModalDialog';

const NoticeItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        p: 3,
        mb: 3,
        '&:hover': {
          borderColor: 'error.light',
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {data.Category}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, '&:hover': { color: 'error.main' } }}>
            {data.Complaint_title}
          </Typography>
        </Box>
        <Button
          variant="text"
          color="error"
          size="small"
          sx={{ textTransform: 'none' }}
          onClick={handleOpenModal} // 상세보기 버튼 클릭 시 모달 열기
        >
          상세보기 →
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary" paragraph>
        {data.answer?.contents || '아직 답변이 등록되지 않았습니다.'}
      </Typography>
      <Typography variant="caption" color="text.secondary" display="block" mb={2}>
        허락수용일자: 2024.11.13~2024.12.13 (D-30)
      </Typography>
      <StatusFlow />

      <ModalDialog open={isModalOpen} handleClose={handleCloseModal} petition={data} />
    </Box>
  );
};

export default NoticeItem;
