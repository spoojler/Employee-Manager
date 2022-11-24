import { useEffect, useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Toolbar } from '@mui/material';
import { shadows } from '@mui/system';

const clockStyle = {
  width: '150px',
  m: 1,
  bgcolor: 'primary.light',
  fontSize: 'h6.fontSize',
  textAlign: 'center',
  border: 2,
  borderRadius: 3,
  borderColor: 'primary.dark',
  boxShadow: 2,
};
const time = () => new Date().toLocaleTimeString();

const Clock = () => {
  const [actualTime, setActualTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setActualTime(time());
    }, 1000);
  }, []);
  return (
    <Toolbar sx={clockStyle}>
      <AccessTimeIcon sx={{ mr: 1 }} />
      <Box>{actualTime}</Box>
    </Toolbar>
  );
};

export default Clock;
