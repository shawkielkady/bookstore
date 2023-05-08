import { configureStore } from "@reduxjs/toolkit";
import books from "../store/bookslicer";
import auth from "../store/authslice";
export default configureStore({
    reducer:{ books , auth },
})