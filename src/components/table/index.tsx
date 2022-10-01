import React from "react";

import Header from "./Header";
import Content from "./Content";

const Table: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl min-w-5xl">
      <table className="table-auto text-primary w-full border-collapse border-spacing-0">
        <Header />
        <Content />
      </table>
      <p className="text-primary text-sm text-right mt-2">
        The provider logo and the button link to the CTA URL
      </p>
    </div>
  );
};

export default Table;
