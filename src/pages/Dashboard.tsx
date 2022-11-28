import { Box, Container } from '@mui/material';
import CalendarCell from '../common/CalendarCell';
import Clock from '../common/Clock';
import Header from '../common/Header';
import SideBar from '../common/SideBar';

const currentDayOfMonth = new Date().getDate();
const currentDayOfWeek = new Date().getDay();
const Dashboard = () => {
  return (
    <Box display={'flex'} bgcolor={'primary.50'}>
      <div>
        <SideBar />
      </div>
      <Box sx={{ width: '100%' }}>
        <Header />
        <CalendarCell
          dayOfWeek={currentDayOfWeek}
          dayOfMonth={currentDayOfMonth}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
