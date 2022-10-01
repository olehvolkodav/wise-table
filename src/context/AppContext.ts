import React from "react";
import { AppContextType } from "../types/AppContextType";

const AppContext = React.createContext<AppContextType | null>(null);

export default AppContext;
