import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Todo[]>(url);

  dispatch({
    type: ActionTypes.fetchTodos,
    payload: res.data,
  });
};
