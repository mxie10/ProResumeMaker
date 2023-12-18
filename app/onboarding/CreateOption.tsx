import { Card,CardFooter } from "@/components/ui/card";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";


interface CreateOption {
    icon?:IconType;
    description?:string;
    selected?:string;
    direction?:any;
    onClick?:(category:string) => void;
    setDirection?:Dispatch<SetStateAction<any>>;
    category:string;
    type:string;
}

const CreateOption:React.FC<CreateOption> = (props) => {
    
    const {icon:Icon,description,selected,onClick,setDirection,category,direction,type} = props;
    return (
        <Card
            className={`
                flex
                flex-col
                justify-center
                items-center
                border-transparent
                border-2
                border-neutral-200
                p-8
                w-5/6
                h-5/6
                md:w-2/5
                md:h-2/5
                shadow-md
                hover:bg-neutral-100
                cursor-pointer
                ${type === category ? 'border-blue-300' : ''}
            `}
            onClick={()=>onClick?.(type)}
        >

            {Icon && 
                <Icon 
                    className="
                         w-36
                         h-36
                    "
                />}
            <div className="text-lg mt-4 font-medium">{description}</div>
        </Card>
    )
}

export default CreateOption;
