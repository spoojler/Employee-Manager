import { Box } from '@mui/material';
import CalendarCell from './CalendarCell';

interface CalendarMonthProps {
  month: number;
}

const calendarBoardStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const CalendarMonth = (props: CalendarMonthProps) => {
  const getMonthDays = (month: number) => {
    const currentYear = new Date().getFullYear();
    return new Date(currentYear, month, 0).getDate();
  };

  let daysInMonthArray: number[] = [];

  for (let i = 1; i <= 12; i++) {
    const days: number = getMonthDays(i);
    daysInMonthArray.push(days);
  }

  const monthCalendarBoard = (month: number) => {
    const daysCount = daysInMonthArray[month - 1];
    const calendarCellsArray = [];
    for (let i = 1; i < daysCount; i++) {
      const newCalendarCell = <CalendarCell dayOfMonth={i} dayOfWeek={3} />;
      calendarCellsArray.push(newCalendarCell);
    }
    return calendarCellsArray;
  };

  return <Box sx={calendarBoardStyle}>{monthCalendarBoard(props.month)}</Box>;
};

export default CalendarMonth;
