import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { orange } from '@mui/material/colors';

const steps = [
    'Personal Details',
    'Education',
    'Work Experience',
    'Project Experience',
    'Skills',
  ];
  
const CustomizedStepper = () => {
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <span style={{ fontSize: '13px' }}>{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }
  
  export default CustomizedStepper;