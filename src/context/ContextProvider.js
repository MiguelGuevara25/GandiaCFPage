import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import context from "./context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";

const ContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [currentActive, setCurrentActive] = useState("#home");

  const prueba = "Hola mundo desde el context";

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const { pathname } = useRouter();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      typeof value === "boolean" ? value : !preMenuStatus
    );
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  useEffect(() => {
    toggleMenu(false);
  }, [pathname]);

  const value = {
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    currentActive,
    setCurrentActive,
    prueba,
    login,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
