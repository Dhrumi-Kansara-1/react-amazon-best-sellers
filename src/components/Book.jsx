import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

function Book({ image, title, author, rating, price, desc, index  }) {
  return (
    <article className="book">
      <span className="bookRank">#{index+1}</span>
      <div className="bookLeft">
        <img src={image} className="bookImg" alt={title} />
      </div>
      <div className="bookRight">
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">{author}</h3>
        <p className="bookRating">
          <FontAwesomeIcon icon={faStar} className="ratingIcon" />
          <span>{rating}</span>
        </p>
        <p className="bookPrice">${price}</p>
        <p className="bookDesc">{desc}</p>
       </div>
    </article>
  )
}
export default Book
