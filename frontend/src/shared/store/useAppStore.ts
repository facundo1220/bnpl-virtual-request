import { create } from "zustand";

type AppState = {
  loadingKeys: Record<string, boolean>;
  isLoading: (key?: string) => boolean;
  setLoading: (key: string, value: boolean) => void;
};

export const useAppStore = create<AppState>((set, get) => ({
  loadingKeys: {},

  isLoading: (key) => {
    const { loadingKeys } = get();

    if (key) return Boolean(loadingKeys[key]);

    return Object.values(loadingKeys).some(Boolean);
  },

  setLoading: (key, value) =>
    set((state) => ({
      loadingKeys: { ...state.loadingKeys, [key]: value },
    })),
}));
