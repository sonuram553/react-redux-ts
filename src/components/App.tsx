import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { AppState } from "../reducers";

interface Props {
  todos?: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<Props> {
  state = { fetching: false };

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.todos?.length && this.props.todos?.length) {
      this.setState({ fetching: false });
    }
  }

  onFetchTodos = () => {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  };

  renderList() {
    return this.props.todos?.map((todo) => (
      <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
        {todo.title}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this.onFetchTodos}>Fetch</button>
        <div>{this.state.fetching ? "LOADING" : this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: AppState) => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
