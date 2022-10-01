import React, { useMemo, memo } from "react";

import { AppContextType } from "../../types/AppContextType";
import { CurrencyType } from "../../types/CurrencyType";
import { ProviderType } from "../../types/ProviderType";
import { TableDataType } from "../../types/TableDataType";

import { getFormattedNumber } from "../../utils/func";

interface ContentItemProps {
  item: TableDataType;
  contextValue: AppContextType;
}

interface RecipientColumnProps {
  currency: CurrencyType | undefined;
  cheapAmount: number | undefined;
  expensiveAmount: number | undefined;
  ctaUrl: string;
}

const RecipientColumn: React.FC<RecipientColumnProps> = ({
  currency,
  cheapAmount,
  expensiveAmount,
  ctaUrl,
}) => {
  return (
    <>
      {!!cheapAmount && (
        <p className="text-center text-lg leading-5 font-bold">
          {`${getFormattedNumber(Number(cheapAmount.toFixed(2)))} ${
            currency?.currency
          }`}
        </p>
      )}
      {!!cheapAmount && !!expensiveAmount && (
        <p className="text-center text-sm">
          <span className="text-green font-bold">+</span>
          {`${getFormattedNumber(
            Number((cheapAmount - expensiveAmount).toFixed(2))
          )} ${currency?.currency}`}
        </p>
      )}
      <div className="flex justify-center items-center mt-1">
        <a
          target="_blank"
          className="text-white bg-secondary text-sm px-4 py-2 rounded-lg hover:opacity-80"
          href={ctaUrl}
        >
          {`Send money to ${currency?.country || ""}`}
        </a>
      </div>
    </>
  );
};

const ContentItem: React.FC<ContentItemProps> = memo(
  ({ item, contextValue }) => {
    const { providers, currencies } = contextValue;

    const srcCurrencyItem = useMemo<CurrencyType | undefined>(() => {
      return currencies.find(
        (currency) => currency.countryCode === item.source
      );
    }, [currencies, item]);

    const tarCurrencyItem = useMemo<CurrencyType | undefined>(() => {
      return currencies.find(
        (currency) => currency.countryCode === item.target
      );
    }, [currencies, item]);

    const cheapProvider = useMemo<ProviderType | undefined>(() => {
      if (!item.cheapProvider) return undefined;
      return providers.find(
        (provider) => provider.id === item.cheapProvider?.id
      );
    }, [providers, item]);

    return (
      <tr>
        <td className="p-4">{srcCurrencyItem?.country || ""}</td>
        <td className="p-4">{tarCurrencyItem?.country || ""}</td>
        <td className="p-4">
          {cheapProvider?.logo ? (
            <div className="flex justify-center items-center">
              <img
                className="w-24 text-center"
                src={cheapProvider.logo}
                alt={cheapProvider.name}
              />
            </div>
          ) : null}
        </td>
        <td className="p-4 text-center">{item.providersCount}</td>
        <td className="p-4 text-center">
          {`${getFormattedNumber(item.amount)} ${
            tarCurrencyItem?.currency || ""
          }`}
        </td>
        <td className="p-4">
          <RecipientColumn
            currency={tarCurrencyItem}
            cheapAmount={item.cheapProvider?.payout}
            expensiveAmount={item.expensiveProvider?.payout}
            ctaUrl={item.ctaUrl}
          />
        </td>
      </tr>
    );
  }
);

export default ContentItem;
