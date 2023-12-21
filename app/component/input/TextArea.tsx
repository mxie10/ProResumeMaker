import { Textarea } from "@/components/ui/textarea";
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
    height?:string;
    bgColor?:string;
    multiple?:boolean;
    addtionalText?:string;
    link?:React.ReactElement;
}

const CustomizedTextArea:React.FC<InputWithLabelProps> = (props) => {
    const { label,inputID,placeHolder,shadow,textSize,textColor,otherStyle,width,bgColor,height,addtionalText,link } = props;
    return (
        <div 
            className={`
                grid 
                gap-1.5
                mt-1
                ${shadow?"shadow-md":""}
                ${otherStyle?otherStyle:""}
                ${width?width:'w-72'}
            `}
        >
            <div className="flex flex-row justify-between">
                <Label 
                    htmlFor={inputID} 
                    className={`
                        ${textSize?textSize:'font-medium'} 
                        ${textColor?textColor:''}
                    `}
                    >
                        {label}
                </Label>
                <Label 
                    htmlFor={inputID} 
                    className={`
                        ${textSize?textSize:'font-medium'} 
                        ${textColor?textColor:''}
                    `}
                    >
                        <div className="flex flex-row justify-between gap-1 items-center">
                            {addtionalText}
                            {link?link:''}
                        </div>
                </Label>
            </div>
            <Textarea id={inputID} placeholder={placeHolder} className={`${bgColor?bgColor:''} ${height?height:''}`}/>
        </div>

    )
}

export default CustomizedTextArea;
