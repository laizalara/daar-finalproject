import "./styles.css";
import "../../css/bracket.css";

export const BookCard = ({ author, cover, link, title }) => {
  return (
    <div className="bookContainer">
      <div className="bookTitle">{title}</div>
      <img className="bookImage" src={cover} alt={title} />
      <div className="bookAuthor">{author}</div>
      <a className="myLink" href={link}> See the book </a>
    </div>
  );
};
