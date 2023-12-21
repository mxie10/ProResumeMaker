import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface ButtonWithLabelAndIconProps {
    name?: string;
    icon?: IconType;
    width?: string;
    height?:string;
    bgColor?:string;
    color?:string;
    rounded?:string;
    border?:string;
    borderColor?:string;
    fontSize?:string;
    onClick?:()=>void;
}

const CustomizedButton: React.FC<ButtonWithLabelAndIconProps> = (props) => {

    const { name, icon: Icon, width, onClick, bgColor,color,rounded,border,borderColor,fontSize,height} = props;
    return (
        <Button 
            className={`
                relative
                ${width?width:'w-full'}
                ${height?height:'h-full'}
                ${bgColor?bgColor:''}
                hover:bg-blue-800
                ${color?color:'white'}
                ${rounded?rounded:''}
                ${border?border:''}
                ${borderColor?borderColor:''}
                ${fontSize?fontSize:''}
                ${Icon?'flex flex-row items-center justify-evenly':''}
                shadow-md
                hover:bg-slate-200
            `}
            onClick={onClick}
        >
             {Icon && (
                <Icon
                    size={18}
                    className="
                    "
                />
            )}
            <div className="font-bold">
                {name}
            </div>
           
        </Button>
    )
}

export default CustomizedButton;
