import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from '../../firebase/data';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.error("Error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password) => {
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Registro exitoso');
    } catch (error) {
      console.error("Error al registrar:", error.message);
      toast.error('Error al registrar');
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Inicio de sesión exitoso');
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      toast.error('Error al iniciar sesión');
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
      toast.success('Inicio de sesión con Google exitoso');
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
      toast.error('Error al iniciar sesión con Google');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success('Cierre de sesión exitoso');
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
      toast.error('Error al cerrar sesión');
    }
  };

  return (
    <authContext.Provider value={{ register, login, loginWithGoogle, logout, user }}>
      {children}
    </authContext.Provider>
  );
}
