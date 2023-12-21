import Book from "../components/Book.jsx" 
import { books } from "../data/contstants.js"

function BookList() {
 
 
  return (
    <section className="bookList">
      <div className="bookListContanier">
        <h1 className="bookListTitle">Amazon Best Seller Books</h1>
        <div className="bookListBody">
          {books.map((book,index) => {
            return (
              <Book
                key={book.id} 
                {...book} 
                index={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default BookList
