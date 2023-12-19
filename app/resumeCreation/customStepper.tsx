import { Stepper } from "react-form-stepper";

const CustomStepper = () => {
    return (
        <Stepper 
            steps={[
                { label: 'Summary' },
                { label: 'Education' },
                { label: 'Work Experience' },
                { label: 'Project Experience' },
                { label: 'Skills' },
            ]}
            activeStep={0} 
        />
    )
  };
  
  export default CustomStepper;