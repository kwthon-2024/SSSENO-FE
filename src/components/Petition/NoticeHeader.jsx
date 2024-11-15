// src/components/NoticeHeader.js
import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { grey, red } from '@mui/material/colors';

const NoticeHeader = () => (
  <Box
    sx={{
      backgroundColor: 'white',
      borderRadius: 2,
      border: `1.5px solid ${grey[400]}`,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      p: 4,
      mb: 3,
    }}
  >
    <Box display="flex" gap={2}>
      <Avatar
        src="/kwu_logo.png"        // 이미지 경로를 public 폴더 내로 설정
        alt="School Logo"
        sx={{
          width: 100,
          height: 100,
        }}
      />
      <Box flex={1}>
        <Typography variant="h6" color="text.primary" paragraph>
          청원 게시판에 등록된 모든 청원은 구성원들의 의견을 반영하여 관리됩니다.
        </Typography>
        <List dense sx={{ pl: 1 }}>
          {[
            { text: '특정인을 비방하거나 사실이 아닌 내용을 포함한 청원은 관리자에 의해 삭제될 수 있습니다.', highlight: '삭제' },
            { text: '게시하신 내용에 부적절한 표현이나 명예훼손 요소가 포함될 경우 삭제 조치가 취해질 수 있습니다.', highlight: '삭제' },
            { text: '모든 청원의 원본은 교육적 목적을 위해 보관됩니다.', highlight: '교육적 목적' },
            { text: '청원 작성 시 다른 사람의 권리를 침해하거나 부적절한 내용을 포함하지 않도록 주의해 주시기 바랍니다.', highlight: '주의' },
            { text: '광고성, 음란성 또는 부적절한 내용이 포함된 청원은 게시가 제한될 수 있습니다.', highlight: '게시가 제한' },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.primary">
                    <span style={{ color: grey[800] }}>{`${index + 1}. `}</span>
                    {item.text.split(item.highlight)[0]}
                    <span style={{ color: red[500], fontWeight: 'bold' }}>{item.highlight}</span>
                    {item.text.split(item.highlight)[1]}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </Box>
);

export default NoticeHeader;
