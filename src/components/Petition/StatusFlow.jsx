import React from 'react';
import { Box, Typography } from '@mui/material';
import { AccessTime, Assignment, Group, CheckCircle } from '@mui/icons-material';

const StatusFlow = () => (
  <Box display="flex" alignItems="center" gap={1} color="text.secondary">
    {[
      { icon: <AccessTime fontSize="small" />, label: '2020.12.11' },
      { icon: <Assignment fontSize="small" />, label: '2020.12.13' },
      { icon: <Group fontSize="small" />, label: '대상자' },
      { icon: <CheckCircle fontSize="small" />, label: '완료' },
    ].map((status, index) => (
      <React.Fragment key={index}>
        <Box display="flex" alignItems="center" gap={0.5}>
          {status.icon}
          <Typography variant="caption">{status.label}</Typography>
        </Box>
        {index < 3 && (
          <Typography variant="caption" color="grey.500">
            →
          </Typography>
        )}
      </React.Fragment>
    ))}
  </Box>
);

export default StatusFlow;
