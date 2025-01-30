import { createContext, useState } from "react";
import type { FunctionComponent } from "react";

// définition du type pour le context
type CheckConnexionContextType = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

// création du context
const CheckConnexionContext = createContext<CheckConnexionContextType | false>(
  false,
);

interface CheckConnexionProviderProps {
  children: React.ReactNode;
}

// création du provider
const CheckConnexionProvider: FunctionComponent<
  CheckConnexionProviderProps
> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <CheckConnexionContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </CheckConnexionContext.Provider>
  );
};

export default CheckConnexionProvider;
