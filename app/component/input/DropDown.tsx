import React from 'react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CustomizedDropDownProps {
    triggerTitle?: string;
    menuLabel?: string;
    menuItem?: Array<string> | undefined;
    bgColor?: string;
}

const CustomizedDropDown: React.FC<CustomizedDropDownProps> = (props) => {
    const [position, setPosition] = React.useState('1');
    const { triggerTitle, menuLabel, menuItem, bgColor } = props;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="outline" 
                    className={`
                        px-2 
                        py-1
                        ${bgColor?bgColor:'bg-white'}
                         text-sky-600
                         font-bold
                        border-neutral-300
                        shadow-md
                    `}
                >
                    {menuItem && menuItem.length > 0 ? 'Work Experience ' + position : 'No Work Experience so far'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>All Experiences</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    {menuItem?.map((item,index)=>{
                        return (
                            <div key={index}>
                                <DropdownMenuRadioItem value={index+1+''}>Work Experience {index+1}</DropdownMenuRadioItem>
                            </div>
                        )
                    })}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default CustomizedDropDown;
