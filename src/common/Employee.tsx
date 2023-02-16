import {
  Avatar,
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@mui/material';
import { useEffect, useState } from 'react';

interface EmployeeProp {
  atWork?: boolean;
}

const Employee = ({ atWork = false }: EmployeeProp) => {
  const [atWorkState, setAtWorkState] = useState(false);

  useEffect(() => {
    setAtWorkState(atWork);
  }, []);

  const atWorkSwitch = (
    <FormControlLabel
      control={
        <Switch
          checked={atWorkState}
          onClick={() => {
            setAtWorkState(!atWorkState);
          }}
        />
      }
      label={atWorkState ? 'Online' : 'Offline'}
    />
  );

  return (
    <Box
      mt={'10px'}
      display={'flex'}
      padding={'10px'}
      justifyContent={'space-between'}
      height={'200px'}
      bgcolor={'background.paper'}
    >
      <Box width={'50%'} textAlign={'center'}>
        <Avatar
          sx={{ height: '120px', width: '120px', margin: '10px auto' }}
          alt="Mark"
          src="https://images.generated.photos/O4bKzbldN6IsHmK-6FY1k-haN2LmvVxjkiBj5HGw27s/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjY5MjYzLmpwZw.jpg"
        />
        <h3>Mark Cukierbierg</h3>
      </Box>
      <Box
        bgcolor={'lightgrey'}
        width={'50%'}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <p>Software Engineer</p>
        <FormGroup>{atWorkSwitch}</FormGroup>
      </Box>
    </Box>
  );
};

export default Employee;
