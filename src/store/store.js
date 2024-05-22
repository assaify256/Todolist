import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";

// const store = configureStore({
//   reducer: { sidebarReducer: sidebarSlice.reducer },
// });

const store = configureStore({
  reducer: {
    todoReducer: reducers.todoReducer,
    viewReducer: reducers.viewReducer,
    listReducer: reducers.listReducer,
    listTypeReducer: reducers.listTypeReducer
  },
});

export default store;
