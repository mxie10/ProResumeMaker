import { create } from 'zustand';

interface useOptimizeExpModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useOptimizeExpModel = create<useOptimizeExpModel>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useOptimizeExpModel;