import React from "react";

const Row = ({ row }) => {
  return (
    <span className="badge" style={{ backgroundColor: row.backgroundColor }}>
      {row.title}
    </span>
  );
};

export default Row;
