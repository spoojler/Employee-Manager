import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckboxList from './CheckboxList';

interface CalendarCellProps {
  dayOfWeek: number;
  dayOfMonth: number;
}

const CalendarCell = (props: CalendarCellProps) => {
  let dayToDisplay: string;
  switch (props.dayOfWeek) {
    case 0:
      dayToDisplay = 'Sunday';
      break;
    case 1:
      dayToDisplay = 'Monday';
      break;
    case 2:
      dayToDisplay = 'Tuesday';
      break;
    case 3:
      dayToDisplay = 'Wednesday';
      break;
    case 4:
      dayToDisplay = 'Thursday';
      break;
    case 5:
      dayToDisplay = 'Friday';
      break;
    case 6:
      dayToDisplay = 'Saturday';
      break;
    default:
      dayToDisplay = 'Some day';
      break;
  }
  return (
    <Card sx={{ maxWidth: '330px', bgcolor: '', m: 2 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {`${dayToDisplay}, ${props.dayOfMonth}`}
        </Typography>
        <CheckboxList />
      </CardContent>
    </Card>
  );
};

export default CalendarCell;
