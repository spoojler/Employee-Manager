import { Box } from '@mui/material';
import CalendarCell from './CalendarCell';

interface CalendarMonthProps {
  month: number;
}

const calendarBoardStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '14px',
};

const CalendarMonth = (props: CalendarMonthProps) => {
  const currentYear = new Date().getFullYear();

  const getMonthDays = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth: number[] = [];
  for (let i = 1; i <= 12; i++) {
    const days: number = getMonthDays(i, currentYear);
    daysInMonth.push(days);
  }

  const monthCalendarBoard = (month: number) => {
    const getDayOfWeek = (day: number) => {
      const dateObject = new Date(currentYear, month, day);
      return dateObject.getDay();
    };

    const daysCount = daysInMonth[month - 1];

    const calendarCellsArray = [];
    for (let i = 1; i <= daysCount; i++) {
      const newCalendarCell = (
        <CalendarCell dayOfMonth={i} dayOfWeek={getDayOfWeek(i)} />
      );
      calendarCellsArray.push(newCalendarCell);
    }
    return calendarCellsArray;
  };

  return <Box sx={calendarBoardStyle}>{monthCalendarBoard(props.month)}</Box>;
};

export default CalendarMonth;
