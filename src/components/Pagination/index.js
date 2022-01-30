import "./styles.css";

export const Pagination = ({ page, setPage, lastPage }) => {
    const handleNextPage = () => {
      setPage(page + 1);
    };
  
    const handlePreviousPage = () => {
      setPage(page - 1);
    };
    return (
      <div className="containerPagination">
        <button disabled={page === 1} onClick={handlePreviousPage}>Previous</button>
        <button disabled={lastPage === page} onClick={handleNextPage}>Next</button>
      </div>
    );
  };
  