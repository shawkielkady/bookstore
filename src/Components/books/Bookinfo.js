import React ,{Fragment} from "react";
import "./books.css";
import { getBook } from "../../store/bookslicer";
import { useSelector } from "react-redux";
const BookInfo=()=>{
    const {bookInfo} = useSelector(state => state.books);
    console.log("this book info",bookInfo);
    return (
        <Fragment> 
            <div className="col-5 book-list text-start  ">
            <h3>Book Details</h3>
            
            <div className="alert alert-secondary" role='alert'>
            {  
                bookInfo ?<div>
                <p>Title : {bookInfo.title }</p> 
                <p>Price :{bookInfo.price }</p> 
                <p>About {bookInfo.disc }</p> 
                </div>
                : <p>There is no post selected yet. Please select!</p>
            }
            </div>
            </div>
            
        </Fragment>
    )
}
export default BookInfo;