import { createSlice } from "@reduxjs/toolkit";
import { initialData, listViewCategory } from "./initialState";

const selectedViewCategory = listViewCategory[0];

const initialState = {
  view: 0,
};

const todoSlice = createSlice({
  name: "view",
  initialState: initialState,
  reducers: {
    editView: (state, action) => {
      state.view = action.payload;
    },
  },
});

const viewSlice = createSlice({
  name: "form",
  initialState: {
    type: "none",
    data: {},
  },
  reducers: {
    get: (state, action) => {
      state.type = "get";
      state.data = action.payload;
    },
    post: (state) => {
      state.type = "post";
    },
    put: (state, action) => {
      state.type = "put";
      state.data = action.payload;
    },
    closeEditor: (state) => {
      state.type = "none";
    },
  },
});

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: initialData.todoList,
    isDone: initialData.todoList.isDone
  },
  reducers: {
    create: (state, action) => {
      state.list.push(action.payload);
    },
    edit: (state, action) => {
      let index;
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.payload.id) {
          index = i;
        }
      }
      state.list.splice(index, 1, action.payload);
    },
    remove: (state,action) => {
      let index;
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.payload.id) {
          index = i;
        }
      }
      state.list.splice(index, 1);
    }, 
  },
});

const listTypeSlice = createSlice({
  name: "list type",
  initialState: {
    listType: initialData.list,
  },
  reducers: {
    plus: (state, action) => {
      state.listType.push(action.payload)
    },
    minus: (state, action) => {
      let index;
      for (let i = 0; i < state.listType.length; i++) {
        if (state.listType[i] === action.payload) {
          index = i;
        }
      }
      state.list.splice(index, 1);
    },
  }
})

const todoReducer = todoSlice.reducer;
const viewReducer = viewSlice.reducer;
const listReducer = listSlice.reducer;
const listTypeReducer = listTypeSlice.reducer;

const reducers = {
  todoReducer,
  viewReducer,
  listReducer,
  listTypeReducer
};

export const { editView } = todoSlice.actions;
export const { get, post, put, closeEditor } = viewSlice.actions;
export const { create, edit, remove, check } = listSlice.actions;
export const {plus, minus} = listTypeSlice.actions;

export default reducers;
