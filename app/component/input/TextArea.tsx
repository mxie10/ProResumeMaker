import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HTMLInputTypeAttribute } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

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
    options?:EasyMDE.Options | undefined
}

const options = {
    minHeight: "160px", 
};

const CustomizedTextArea:React.FC<InputWithLabelProps> = (props) => {
    const { label,inputID,shadow,textSize,textColor,otherStyle,width,addtionalText,link, options } = props;
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
            <SimpleMDE options={options}/>
        </div>

    )
}

export default CustomizedTextArea;
