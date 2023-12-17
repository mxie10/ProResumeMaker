import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { HTMLInputTypeAttribute } from "react";

interface InputWithLabelProps {
    label?:string;
    inputType?:HTMLInputTypeAttribute;
    inputID?:string;
    placeHolder?:string;
    shadow?:Boolean;
    textSize?:string;
    textColor?:string;
    otherStyle?:string;
}

const CustomizedInput:React.FC<InputWithLabelProps> = (props) => {
    const { label,inputType,inputID,placeHolder,shadow,textSize,textColor,otherStyle } = props;
    return (
        <div 
            className={`
                grid 
                w-72
                gap-1.5
                ${shadow?"shadow-md":""}
                ${otherStyle?otherStyle:""}
            `}
        >
            <Label 
                htmlFor={inputID} 
                className={`
                    ${textSize?textSize:'font-medium'} 
                    ${textColor?textColor:''}
                `}
                >
                    {label}
            </Label>
            <Input type={inputType} id={inputID} placeholder={placeHolder} />
        </div>

    )
}

export default CustomizedInput;
