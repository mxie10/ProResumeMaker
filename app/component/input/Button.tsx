import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface ButtonWithLabelAndIconProps {
    name?: string;
    icon?: IconType;
    width?: string;
    onClick?:()=>void;
    bgColor?:string;
}

const CustomizedButton: React.FC<ButtonWithLabelAndIconProps> = (props) => {

    const { name, icon: Icon, width, onClick, bgColor} = props;
    return (
        <Button 
            className={`
                relative
                ${width?width:"w-full"}
                ${bgColor?bgColor:''}
                hover:bg-blue-800
            `}
            onClick={onClick}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="
                        absolute
                        left-4
                        top-3
                    "
                />
            )}
            <div className="font-bold">{name}</div>
        </Button>
    )
}

export default CustomizedButton;
