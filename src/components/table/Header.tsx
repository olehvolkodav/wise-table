import React from "react";

import { HEADER_COLUMNS } from "../../utils/common";

const Header: React.FC = () => {
  return (
    <thead className="after:h-0.5 after:table-row after:content-['']">
      <tr className="border border-primary">
        {HEADER_COLUMNS.map((column, index) => (
          <th key={`column-${index}`} className="font-bold p-4">
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
