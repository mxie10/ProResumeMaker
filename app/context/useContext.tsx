import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch, useForm } from "react-hook-form";

type ContextType = {
    register:UseFormRegister<FieldValues>,
    handleSubmit:UseFormHandleSubmit<FieldValues, undefined>,
    setValue:UseFormSetValue<FieldValues>,
    watch:UseFormWatch<FieldValues>,
    reset:UseFormReset<FieldValues>,
    resuCreateStep:number,
    setResuCreateStep:Dispatch<SetStateAction<number>>
    openWorkExpModal:boolean,
    setOpenWorkExpModal:Dispatch<SetStateAction<boolean>>
    openOptimizeProExpModel:boolean,
    setOpenOptimizeProExpModel:Dispatch<SetStateAction<boolean>>
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [resuCreateStep, setResuCreateStep] = useState(0);
    const [openWorkExpModal, setOpenWorkExpModal] = useState(false);
    const [openOptimizeProExpModel, setOpenOptimizeProExpModel] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState:{
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            firstName: '',
            middleName: 'null',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            state:'',
            province: '',
            country: '',
            zipCode: '',
            dob: '',
            age: '',
            summery:'',
            education:[{school:'',startDate:'',endDate:'',degree:''}],
            workExperience:[
                {
                    company:'company 1',
                    jobTitle:'',
                    startDate:'',
                    endDate:'',
                    description:'work exp 1',
                },
            ]
        }
    })

    const contextValue: ContextType = {
        register:register,
        handleSubmit:handleSubmit,
        setValue:setValue,
        watch:watch,
        reset:reset,
        resuCreateStep:resuCreateStep,
        setResuCreateStep:setResuCreateStep,
        openWorkExpModal:openWorkExpModal,
        setOpenWorkExpModal:setOpenWorkExpModal,
        openOptimizeProExpModel:openOptimizeProExpModel,
        setOpenOptimizeProExpModel:setOpenOptimizeProExpModel
    };
  
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
  };

  export const useGlobalContext = (): ContextType => {
    const context = useContext(Context);
  
    if (!context) {
      throw new Error('useContext must be used within a Your ContextProvider');
    }
  
    return context;
  };


//   {
//     company:'company 1',
//     jobTitle:'',
//     startDate:'',
//     endDate:'',
//     description:'work exp 3',
//     generatedPhrase:[
//         'Designed and implemented application using React with Redux, HTML 5, CSS3 to create professional UI.',
//         'Designed and implemented application using React with Redux, HTML 5, CSS3 to create professional UI.',
//         'Designed and implemented application using React with Redux, HTML 5, CSS3 to create professional UI.',
//         'Designed and implemented application using React with Redux, HTML 5, CSS3 to create professional UI.',
//         'Designed and implemented application using React with Redux, HTML 5, CSS3 to create professional UI.',
//     ]
// },

