import {
  Avatar,
  Box,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from '@mui/material';

const menuItemStyle = {
  justifyContent: 'center',
  width: '100%',
  fontSize: '20px',
  p: 2,
  borderTop: 1,
};

const SideBar = () => {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        height: '100vh',
        bgcolor: 'primary.dark',
        minWidth: '300px',
        boxShadow: 1,
      }}
    >
      <Typography variant="h5" marginTop={2}>
        Hi! Chief
      </Typography>
      <Avatar
        sx={{ height: '60px', width: '60px', m: 1 }}
        alt="Chief"
        src="https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png"
      />
      <MenuList
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'stretch',
        }}
      >
        <MenuItem sx={menuItemStyle}>Tasks</MenuItem>
        <MenuItem sx={menuItemStyle}>Calendar</MenuItem>
        <MenuItem sx={menuItemStyle}>Financial</MenuItem>
        <MenuItem sx={menuItemStyle}>Employees</MenuItem>
      </MenuList>
    </Box>
  );
};

export default SideBar;
