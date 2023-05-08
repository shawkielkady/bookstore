import React , {Fragment} from "react";
import "./books.css";
import { deleteBook } from "../../store/bookslicer";
import { useDispatch } from "react-redux";
import {  getBook} from "../../store/bookslicer";
const BookList = ({ loading, books ,loggedin }) => {
    const dispatch = useDispatch();
    const bookList =
    books.books.map((book) => (
      <div className="d-flex space-between book" key={book.id}>
        <span className="text-black-50 text-bold">{book.title}</span>
        <div className="d-flex gap-2">
          <button className="btn btn-primary"
          onClick={() => dispatch(getBook(book))}
          >Read</button>
          <button className="btn btn-danger"
           disabled={!loggedin}
           onClick={()=>dispatch(deleteBook(book)).then((data)=>{console.log(data)})}
           
           >Delete</button>
        </div>
      </div>
    ))
      
  
    return (
      <Fragment>
        <div className="col-5 text-start">
          <h3>Books List</h3>
          {loading ? (
            "Loading..."
          ) : (
            <div>
              {bookList.length> 0 ? bookList : "there are no books"}
            </div>
          )}
        </div>
      </Fragment>
    );
  };
  
  export default BookList;