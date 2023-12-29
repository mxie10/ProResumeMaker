import { create } from 'zustand';

interface useOptmizeProSummaryModelProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useOptmizeProSummaryModel = create<useOptmizeProSummaryModelProps>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useOptmizeProSummaryModel;