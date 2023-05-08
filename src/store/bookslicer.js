import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const getBooks=createAsyncThunk('book/getbooks',async(_,thunkAPI)=>{
    const {rejectedWithValue } = thunkAPI
    try {
        const res = await fetch('http://localhost:3004/books') ;
        const data =await res.json();
        return data;
    } catch (error) {
        return rejectedWithValue(error.message );
    }
});
export const inserTBook=createAsyncThunk('book/insert',async(bookdata,thunkAPI)=>{
    const {rejectedWithValue , getState} = thunkAPI;
    try {
         bookdata.bookUser=getState().auth.user;
        const res = await fetch('http://localhost:3004/books',{
            method: 'POST',
            body: JSON.stringify(bookdata),
            headers: {'Content-Type': 'application/json; charset=utf-8'} 
        }
        );
        const data =await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
        return rejectedWithValue(error.message );

    }
});
export const deleteBook=createAsyncThunk('book/delete',async(book,thunkAPI)=>{
    const {rejectedWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:3004/books/${book.id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json; charset=utf-8'} 
        }
        );
    console.log(book);
        return book;
    }
    catch (error) {
        console.log(error);
        return rejectedWithValue(error.message );

    }
});
export const getBook=createAsyncThunk('book/getbook',async(book,thunkAPI)=>{
    const {rejectedWithValue } = thunkAPI
    try {
        const res = await fetch('http://localhost:3004/books',{
            method: 'GET',
            headers: {'Content-Type': 'application/json; charset=utf-8'} 

        }) ;
        //const data =await res.json();
        console.log(book);
        return book;
    } catch (error) {
        return rejectedWithValue(error.message );
    }
});



const bookslice=createSlice(
    {
        name:"book",
        initialState:{books:[], loading:false ,bookInfo:null},
        extraReducers
        :{  
            //get books
            [getBooks.pending]:(state,action)=>{

                state.loading = true;
            },
            [getBooks.fulfilled]:(state,action)=>{
                state.books=action.payload
                state.loading = false;

            },
            [getBooks.rejected]:(state,action)=>{
                state.loading = false;

            },
            //insert book
            [inserTBook.pending]:(state,action)=>{
                state.loading = true;
            },
            [inserTBook.fulfilled]:(state,action)=>{
                state.books.push(action.payload);
                state.loading = false;
            },
            [inserTBook.rejected]:(state,action)=>{
                state.loading = false;

            },
            //delete book
            [deleteBook.pending]:(state,action)=>{
                console.log(action);
                state.loading = true;
            },
            [deleteBook.fulfilled]:(state,action)=>{
                state.books=state.books.filter((book)=> book.id !== action.payload.id)
                state.loading = false;
            },
            [deleteBook.rejected]:(state,action)=>{
                console.log(action);
                state.loading = false;

            },
            [getBook.fulfilled]:(state,action)=>{
                state.bookInfo=action.payload;
                console.log(action.payload);

            }
        }
    }
)
export default bookslice.reducer;