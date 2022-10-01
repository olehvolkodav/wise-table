import { CurrencyType } from "./CurrencyType";
import { ProviderType } from "./ProviderType";
import { TableDataType } from "./TableDataType";

export type AppContextType = {
  providers: ProviderType[];
  currencies: CurrencyType[];
  tableData: TableDataType[];
};
