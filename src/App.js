import { getBooks } from "./services/api/search";
import { useEffect, useState, useCallback } from "react";
import { Pagination } from "./components/Pagination";
import { BookList } from "./components/BookList";
import { BookSearch } from "./components/BookSearch";

function App() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleBooks = useCallback(async () => {
    if (query) {
      const response = await getBooks(query, page, 0);
      console.log(response.data);
      setLastPage(response.data.page_count);
      setBooks(response.data.books);
    }
  }, [query, page]);

  useEffect(() => {
    handleBooks();
  }, [handleBooks, page]);

  return (
    <div >
      <BookSearch setQuery={setQuery} />
      <Pagination page={page} setPage={setPage} lastPage={lastPage} />
      <BookList books={books} />
    </div>
  );
}
export default App;
