import { BookCard } from "../BookCard";
import "./styles.css";
import "../../css/bracket.css";

export const BookList = ({ books }) => {
  return (
    <div className="bookListContainer">
      {books.length !== 0 &&
        books.map((book) => {
          return (  
            <BookCard
              key={book.id}
              author={book.author}
              title={book.title}
              link={book.link}
              cover={book.cover}
            />
          );
        })}
    </div>
  );
};
