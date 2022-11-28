import { Box } from '@mui/material';
import CalendarMonth from '../common/CalendarMonth';

const Calendar = () => {
  const currentMonth = new Date().getMonth() + 1;
  return (
    <Box>
      <CalendarMonth month={currentMonth} />
    </Box>
  );
};

export default Calendar;
