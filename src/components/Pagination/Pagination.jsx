import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
export default function Pagination({ onChangePage }) {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={10}
        pageCount={5}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
