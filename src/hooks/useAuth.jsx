import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Contexto
const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook nombrado
export function useAuth() {
  return useContext(AuthContext);
}
