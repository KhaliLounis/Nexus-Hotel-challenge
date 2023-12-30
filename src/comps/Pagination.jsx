import React from "react";
import "./pagination.css";
const Pagination = () => {
  return (
    <div className="pagination">
      <p>Previous page </p>
      {[...Array(8).keys()].map((item) => {
        if (item > 0) {
          return <span>{item}</span>;
        }
        console.log(item);
      })}
      <p
        style={{
          cursor: "pointer",
        }}
      >
        Next page
      </p>
    </div>
  );
};

export default Pagination;
