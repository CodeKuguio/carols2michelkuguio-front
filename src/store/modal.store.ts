import {create} from 'zustand'

interface ModalState {
    isOpen: boolean,
    setClose: () => void,
}
export const useModalStore = create<ModalState>(set => ({
  isOpen: true,
  setClose: () => set({isOpen: false}),
}))
