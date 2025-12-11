import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface AuthState {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
  setIsLogin: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  // persist(
  (set) => ({
    isLogin: false,
    login: () => set({ isLogin: true }),
    logout: () => set({ isLogin: false }),
    setIsLogin: (value) => set({ isLogin: value }),
  }),
  // {
  //   name: "auth-storage", // name of the item in the storage (must be unique)
  // },
  // ),
);
