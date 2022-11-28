import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckboxList from './CheckboxList';
import { Box } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';

interface CalendarCellProps {
  dayOfWeek: number;
  dayOfMonth: number;
}

const CalendarCell = (props: CalendarCellProps) => {
  const [count, setCount] = useState(0);

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
  const handleAddField = () => setCount(count + 1);
  const handleRemoveField = () => setCount(count - 1);

  return (
    <Card
      sx={{
        minWidth: '320px',
        height: '100%',
        bgcolor: '',
        m: 1,
        mb: 0,
        mx: 'auto',
      }}
      variant="outlined"
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: 18 }} gutterBottom fontWeight={'500'}>
            {`${dayToDisplay}, ${props.dayOfMonth}`}
          </Typography>
          <Button onClick={handleAddField}>
            <AddCircleOutlineOutlinedIcon />
          </Button>
        </Box>
        <CheckboxList fieldsCount={count} />
        {count ? (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button onClick={handleRemoveField} sx={{ alignSelf: 'flex-end' }}>
              <RemoveCircleOutlineIcon />
            </Button>
          </Box>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CalendarCell;
