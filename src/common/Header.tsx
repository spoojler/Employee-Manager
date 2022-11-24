import { AppBar, Toolbar } from '@mui/material';
import Clock from './Clock';

const Header = () => {
  return (
    <AppBar component="div" sx={{position:'relative',height: '100px'}}>
      <Toolbar sx={{ justifyContent: 'space-between', height: '100%'}}>
        <h2>Employee Manager</h2>
        <Clock />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
