import { Box } from '@mui/material';
import CalendarCell from '../common/CalendarCell';
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
        <Box sx={{ width: '350px', ml: 1 }}>
          <CalendarCell
            dayOfWeek={currentDayOfWeek}
            dayOfMonth={currentDayOfMonth}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
