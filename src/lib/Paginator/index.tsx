import React, { useMemo } from "react";
import "./style.css";

import { nanoid } from "nanoid";

/**
 *
 * @param pages number
 * @param changePage (newPage: number) => void
 * @param currentPage number
 *
 */

const Paginator: React.FC<PaginatorProps> = ({
  pages,
  changePage,
  currentPage,
}) => {
  const buttons = useMemo(() => {
    let newButtons = [];

    newButtons.push(
      <button
        key={nanoid()}
        className="viniciussslima-button"
        onClick={() =>
          changePage && changePage(currentPage ? currentPage - 1 : 0)
        }
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
    );

    for (let i = 1; i <= pages; i++) {
      newButtons.push(
        <button
          key={nanoid()}
          className="viniciussslima-button"
          onClick={() => changePage && changePage(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    newButtons.push(
      <button
        key={nanoid()}
        className="viniciussslima-button"
        onClick={() =>
          changePage && changePage(currentPage ? currentPage + 1 : 0)
        }
        disabled={currentPage === pages}
      >
        {">"}
      </button>
    );
    return newButtons;
  }, [changePage, currentPage, pages]);

  return <div className="paginator-container">{buttons}</div>;
};

export default Paginator;
