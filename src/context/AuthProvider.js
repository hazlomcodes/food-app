import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [FBdata, setFBdata] = useState(null); // change the initial state to null

  return (
    <AuthContext.Provider value={{ FBdata, setFBdata }}>
      {children}
    </AuthContext.Provider>
  );
};





