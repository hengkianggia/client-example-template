import { generateRandomString } from "@/feature/_global/utils/generateRandomString";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface RandomStringState {
  randomValue: string;
  generateNewString: () => void;
}

export const useRandomStringStore = create<RandomStringState>()(
  persist(
    (set) => ({
      randomValue: "",

      generateNewString: () =>
        set({
          randomValue: generateRandomString(),
        }),
    }),
    {
      name: "random-string-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => {
        // Return localStorage only in the browser environment
        if (typeof window !== "undefined") {
          return localStorage;
        }
        // Fallback to a simple in-memory store during SSR
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({ randomValue: state.randomValue }),
    },
  ),
);
