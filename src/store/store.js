import { configureStore } from "@reduxjs/toolkit";
import AppwriteSliceReducers from "./reducusersFile";

const reduxStore = configureStore({
    reducer : AppwriteSliceReducers
});

export default reduxStore;