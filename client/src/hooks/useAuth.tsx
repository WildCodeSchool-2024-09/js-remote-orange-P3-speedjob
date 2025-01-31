import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  handleLogin: (login: string, password: string) => Promise<void>;
  handleRegister: (login: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  isAuth: boolean;
  message: string | null;
  user: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

import type { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async (login: string, password: string) => {
    if (login === null || password === null) {
      setMessage("Veuillez saisir les datas");
      return;
    }

    const values = { login: login, password: password };

    const response = await axios.post<{ message: string; user?: string }>(
      "http://localhost:3310/api/auth/signin",
      {
        method: "POST",
        values: values,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = response.data;

    if (data.message && data.user) {
      setMessage(data.message);
    } else {
      setMessage(data.message);
    }
  };

  interface LoginResponse {
    token: string;
    user: string;
    message: string;
  }

  const handleLogin = async (login: string, password: string) => {
    if (login === null || password === null) {
      //setMessage('Veuillez saisir les datas');
      return;
    }

    const values = { login: login, password: password };
    const { data } = await axios.post<LoginResponse>(
      `${import.meta.env.VITE_API_URL}/api/auth/signin`,
      {
        method: "POST",
        values: values,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (data.token) {
      setIsAuth(true);
      setUser(data.user);
      localStorage.setItem("token", data.token);
    } else {
      setIsAuth(false);
      setMessage(data.message || "Password erronné");
    }
  };

  const handleLogout = async () => {
    await handleClean();
  };

  const currentUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // Test de connexion back
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/check`,
        {
          headers: { token: token },
        },
      );

      setIsAuth((data as { check: boolean })?.check);
      setUser((data as { user: array })?.user[0]);
      if (!(data as { check: boolean })?.check) {
        await handleClean();
      }
    } else {
      await handleClean();
    }
  };

  const handleClean = async () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    setTimeout(() => {
      currentUser();
    }, "5000"); // toutes les minutes

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleLogout,
        isAuth,
        message,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Pour utiliser useAuth context est necessaire");
  return context;
};
