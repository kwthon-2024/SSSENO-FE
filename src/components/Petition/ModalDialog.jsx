import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button, Box, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const ModalDialog = ({ open, handleClose, petition }) => (
  <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
    {/* 모달 타이틀 및 닫기 버튼 */}
    <DialogTitle>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{petition?.Complaint_title || '제목 없음'}</Typography>
        <IconButton onClick={handleClose} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>

    <DialogContent>
      {/* 청원 기본 정보 */}
      <Box sx={{ mb: 2, padding: '0 16px' }}>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
          {petition?.Category || '미정'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          청원 진행 일자: 2024.11.14 ~ 2024.12.14
        </Typography>
        <Divider />

        {/* 청원 설명 */}
        <Typography variant="body1" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
          {petition?.Description || '내용 없음'}
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 답변 정보 */}
      <Box sx={{ padding: '0 16px' }}>
        <Typography variant="h6" gutterBottom>
          총학생회의 답변
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          청원 답변 일자: {petition?.answer?.date || '아직 답변되지 않았습니다.'}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, whiteSpace: 'pre-line' }}>
          {petition?.answer?.contents || '아직 답변되지 않았습니다.'}
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* 참여 인원 */}
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
        <Typography variant="h6">👥 참여 중인 학생 : {petition?.Gachucount || '0'}명</Typography>
      </Box>
    </DialogContent>

    <DialogActions sx={{ padding: '16px' }}>
      <Button onClick={handleClose} color="primary" variant="contained">
        닫기
      </Button>
    </DialogActions>
  </Dialog>
);

export default ModalDialog;
