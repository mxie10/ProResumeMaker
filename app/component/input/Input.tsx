import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    width?:string;
    bgColor?:string;
    multiple?:boolean;
}

const CustomizedInput:React.FC<InputWithLabelProps> = (props) => {
    const { label,inputType,inputID,placeHolder,shadow,textSize,textColor,otherStyle,width,bgColor,multiple} = props;
    return (
        <div 
            className={`
                gap-1.5
                mt-1
                w-full
                lg:w-64
                ${shadow?"shadow-md":""}
                ${otherStyle?otherStyle:""}
            `}
        >
            <Label 
                htmlFor={inputID} 
                className={`
                    ${textSize?textSize:'text-md'} 
                    ${textColor?textColor:''}
                `}
                >
                    {label}
            </Label>
            <Input type={inputType} id={inputID} placeholder={placeHolder} className={`${bgColor?bgColor:''}`}/>
        </div>

    )
}

export default CustomizedInput;
