import React, { useEffect  }  from "react";
import BookList from "./BooksLists";
import BookInfo from "./Bookinfo";
import { useDispatch , useSelector } from "react-redux";
import { getBooks , getBook} from "../../store/bookslicer";
import "./books.css";

const BookContainer= ()=>{
    const { loading  ,books , bookInfo} =useSelector(state=>state);
    const {loggedin} = useSelector(state => state.auth);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getBooks())
    },[dispatch]);
    
    return(
        <div className="container mt-3">
             <div className=" row book-list text-center">
            <BookList loading={loading} books={books} loggedin={loggedin}  />
            <BookInfo bookInfo={bookInfo}/>
        </div>  
        </div>
       
    )
}
export default BookContainer;