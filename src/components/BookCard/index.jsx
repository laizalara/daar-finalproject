import "./styles.css";

export const BookCard = ({ author, cover, link, title }) => {
  return (
    <div className="bookContainer">
      <div className="bookTitle">{title}</div>
      <img className="bookImage" src={cover} alt={title} />
      <div className="bookAuthor">{author}</div>
      <a href={link}> See the book </a>
    </div>
  );
};
