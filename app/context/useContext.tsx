import { ReactNode, createContext, useContext } from "react";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch, useForm } from "react-hook-form";

type ContextType = {
    register:UseFormRegister<FieldValues>,
    handleSubmit:UseFormHandleSubmit<FieldValues, undefined>,
    setValue:UseFormSetValue<FieldValues>,
    watch:UseFormWatch<FieldValues>,
    reset:UseFormReset<FieldValues>
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
            FirstName: '',
            MiddleName: 'null',
            LastName: '',
            Email: '',
            Phone: '',
            City: '',
            State:'',
            Province: '',
            Country: '',
            ZipCode: '',
            DoB: '',
            Age: '',
            Summery:'',
            Education:[{school:'',startDate:'',endDate:'',degree:''}]
        }
    })

    const contextValue: ContextType = {
        register:register,
        handleSubmit:handleSubmit,
        setValue:setValue,
        watch:watch,
        reset:reset
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

