"use client";

export interface AuthContextType {
  user: UserTypes | null;
  login: (_email: string, _password: string) => void;
  logout: () => void;

}

import { UserTypes } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<UserTypes | null>(null);



  async function login(email: string, password: string) {
    try {
      const res = await axios.post("http://localhost:4000/user/login", {
        email: String(email),
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

      setUser(res.data.user);

      console.log("REQ BODY:", res.data);

      router.push("/");
    } catch (error: any) {
      console.error(error, "frotnend");
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    const raw = localStorage.getItem("user");
    if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common.Authorization;
    setUser(null);
  };
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
