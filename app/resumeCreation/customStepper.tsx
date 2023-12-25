import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { orange } from '@mui/material/colors';

const steps = [
    'Personal Details',
    'Work Experience',
    'Professional Summary',
    'Education',
    'Professional Skills',
  ];
  
interface CustomizedStepperProps {
  activeStep?:number;
}
  
const CustomizedStepper:React.FC<CustomizedStepperProps> = (props) => {

    const {activeStep} = props;

    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
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