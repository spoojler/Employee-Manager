import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckboxList from './CheckboxList';

const dateObject = new Date();
const day = dateObject.getDay();
let dayToDisplay: string;
switch (day) {
  case 0:
    dayToDisplay = 'Monday';
    break;
  case 1:
    dayToDisplay = 'Tuesday';
    break;
  case 2:
    dayToDisplay = 'Wednesday';
    break;
  case 3:
    dayToDisplay = 'Thursday';
    break;
  case 4:
    dayToDisplay = 'Friday';
    break;
  case 5:
    dayToDisplay = 'Saturday';
    break;
  case 6:
    dayToDisplay = 'Sunday';
    break;
  default:
    dayToDisplay = 'Some day';
    break;
}

const CalendarCell = () => {
  return (
    <Card sx={{ maxWidth: '330px', bgcolor: '', m: 2 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {`${dayToDisplay}, ${dateObject.getDate()}`}
        </Typography>
        <CheckboxList />
      </CardContent>
    </Card>
  );
};

export default CalendarCell;
