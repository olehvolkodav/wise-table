import React from "react";
import { providers } from "./data/providers";
import { currencies } from "./data/currencies";
import { tableData } from "./data/table";

import List from "./pages/List";

import AppContext from "./context/AppContext";
import "./assets/styles/index.css";

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        providers,
        currencies,
        tableData,
      }}
    >
      <List />
    </AppContext.Provider>
  );
};

export default App;
