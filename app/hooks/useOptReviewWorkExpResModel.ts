import { create } from 'zustand';

interface useOptReviewWorkExpResModelProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useOptReviewWorkExpResModel = create<useOptReviewWorkExpResModelProps>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useOptReviewWorkExpResModel;