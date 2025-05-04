// authStore.ts
import { create } from 'zustand';

interface AuthState {
  // Add state here
  // Example:
  name: string;
}

export const useAuthStore = create<AuthState>(() => ({
  // initial state
  // Example:
  name: '',
}));