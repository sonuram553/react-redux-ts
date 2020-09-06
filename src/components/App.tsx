import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { AppState } from "../reducers";

interface Props {
  todos?: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<Props> {
  onFetchTodos = () => {
    this.props.fetchTodos();
  };

  renderList() {
    return this.props.todos?.map((todo) => (
      <div key={todo.id}>{todo.title}</div>
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this.onFetchTodos}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: AppState) => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
