import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Todo[]>(url);

  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: res.data,
  });
};
