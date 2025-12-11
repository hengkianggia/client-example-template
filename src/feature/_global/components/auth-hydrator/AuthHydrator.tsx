"use client";

import { useAuthStore } from "@/state/useAuthStore";
import { useRef } from "react";

export default function AuthHydrator({ token }: { token: string }) {
  const { login, logout } = useAuthStore((state) => state);
  const initialized = useRef(false);

  if (!initialized.current) {
    if (token) {
      login();
    } else {
      logout();
    }
    initialized.current = true;
  }

  return null;
}
