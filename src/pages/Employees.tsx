import { Box } from '@mui/material';
import Employee from '../common/Employee';
import Header from '../common/Header';
import SideBar from '../common/SideBar';

const Employees = () => {
  return (
    <Box display={'flex'} bgcolor={'primary.50'}>
      <div>
        <SideBar />
      </div>
      <Box sx={{ width: '100%' }}>
        <Header />
        <Box sx={{ width: '350px', ml: 1 }}>
          <Employee atWork={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Employees;
