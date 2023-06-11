import { create } from 'zustand';

interface RentalModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRentalModal = create<RentalModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRentalModal;