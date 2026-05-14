import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User } from "@epios/domain";
import { API_BASE_URL } from "../api-config";

interface SecurityContextType {
  currentUser: User | null;
  setCurrentUserId: (id: string) => void;
  isLoading: boolean;
}

const SecurityContext = createContext<SecurityContextType | undefined>(
  undefined,
);

export const SecurityProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string>(() => {
    return localStorage.getItem("currentUserId") || "observer-1";
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("currentUserId", currentUserId);
    fetchUser();
  }, [currentUserId]);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/security/me`, {
        headers: {
          "x-user-id": currentUserId,
        },
      });
      const data = await response.json();
      setCurrentUser(data.user);
    } catch (error) {
      console.error("Failed to fetch user", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SecurityContext.Provider
      value={{ currentUser, setCurrentUserId, isLoading }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error("useSecurity must be used within a SecurityProvider");
  }
  return context;
};
