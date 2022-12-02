import create from "zustand";

interface ModalStore {
  isCreateRunnerModalVisible: boolean;
  isCreateBoxModalVisible: boolean;
  setCreateRunnerModalVisible: (v: boolean) => void;
  setCreateBoxModalVisible: (v: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isCreateRunnerModalVisible: false,
  isCreateBoxModalVisible: false,
  setCreateRunnerModalVisible: (v: boolean) =>
    set({ isCreateRunnerModalVisible: v }),
  setCreateBoxModalVisible: (v: boolean) => set({ isCreateBoxModalVisible: v }),
}));
