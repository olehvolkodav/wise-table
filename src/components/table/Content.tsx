import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import { AppContextType } from '../../types/AppContextType';

import ContentItem from './ContentItem';

const Content: React.FC = () => {
  const contextValue = useContext<AppContextType | null>(AppContext);

  if(!contextValue)
    return <></>;

  return (
    <tbody className="border border-primary">
      {
        contextValue.tableData.map((item, index) => (
          <ContentItem
            key={`content-item-${index}`}
            item={item}
            contextValue={contextValue}
          />
        ))
      }
    </tbody>
  );
}

export default Content;