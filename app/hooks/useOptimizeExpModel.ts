import { create } from 'zustand';

interface useOptimizeExpModelProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useOptimizeExpModel = create<useOptimizeExpModelProps>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useOptimizeExpModel;