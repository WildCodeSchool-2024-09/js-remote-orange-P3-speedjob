import { createContext, useState } from "react";
import type { FunctionComponent } from "react";

// définition du type pour le context
type searchQueryContextType = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

// création du context
const searchQueryContext = createContext<searchQueryContextType | null>(null);

interface searchQueryProviderProps {
  children: React.ReactNode;
}

// création du provider
const searchQueryProvider: FunctionComponent<searchQueryProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <searchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </searchQueryContext.Provider>
  );
};

export default searchQueryProvider;
