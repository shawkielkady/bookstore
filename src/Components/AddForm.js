import React , {useRef} from "react";
import { useDispatch , useSelector } from "react-redux";
import { inserTBook } from "../store/bookslicer";

const AddForm=()=>{
    const {loggedin} = useSelector(state => state.auth)
    console.log(loggedin);
    const title=useRef(null);
    const price=useRef(null);
    const disc=useRef(null);
    const dispatch = useDispatch();
    const handlesubmit = (e)=>{
        e.preventDefault();
        const data={
            title:title.current.value,
            price:price.current.value,
            disc:disc.current.value,
        }
        dispatch(inserTBook(data));
        title.current.value=null;
        price.current.value=null;
        disc.current.value=null;
    }
    return(
        <div className="container">
            <div className="row">
                <div className="text-start offset-3 col-6 mt-3">
                    <h2>Insert Books</h2>
                    <form onSubmit={handlesubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' className='form-control' id='title' required ref={title} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input type='number' className='form-control' id='price' required ref={price} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='Description'>Description</label>
                            <textarea
                            className='form-control'
                            id='Description'
                            rows='3'
                            required
                            ref={disc}
                            ></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary mt-3' disabled={!loggedin}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
export default AddForm;