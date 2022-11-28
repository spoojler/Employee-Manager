import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const CheckboxList = () => {
  const [checked, setChecked] = useState([-1]);
  const initialTasks = ['', '', '', ''];
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskText =
    (value: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTasks = [...tasks];
      newTasks[value] = event.target.value;
      setTasks(newTasks);
      console.log(tasks);
    };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value, index) => {
        const labelId = `checkbox-list-label-${tasks[index]}`;

        return (
          <ListItem key={value} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
            <TextField
              id="standard-multiline-flexible"
              multiline
              maxRows={2}
              value={tasks[index]}
              placeholder="Add task"
              onChange={handleTaskText(value)}
              sx={{ mb: 1 }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckboxList;
