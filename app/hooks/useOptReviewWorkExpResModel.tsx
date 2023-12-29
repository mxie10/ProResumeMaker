import { create } from 'zustand';

interface useOptReviewWorkExpResModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useOptReviewWorkExpResModel = create<useOptReviewWorkExpResModel>((set)=>({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen: false})
}))

export default useOptReviewWorkExpResModel;