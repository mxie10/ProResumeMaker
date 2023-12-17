import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface ButtonWithLabelAndIconProps {
    name?: string;
    icon?: IconType;
    width?: string;
    other?: string;
    onClick?:()=>void;
}

const CustomizedButton: React.FC<ButtonWithLabelAndIconProps> = (props) => {

    const { name, icon: Icon, width, other, onClick} = props;
    return (
        <Button 
            className={`
                relative
                ${width?width:"w-full"}
                ${other?other:""}
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
