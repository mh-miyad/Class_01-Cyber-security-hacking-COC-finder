import { create } from "zustand";
import type { AppStore } from "./store.types";

export const useAppStore = create<AppStore>()((...args) => ({
  // ...createProductSlice(...args),
  // ...createFilterSlice(...args),
  // ...createCartSlice(...args),
  // ...createWishlistSlice(...args),
}));
