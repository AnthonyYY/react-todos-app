import React from 'react';
import TodoHeader from './todo-header';
import TodoList from './todo-list';
import InputField from './input-field';

const todos = [
  {
    id: 1,
    content: 'Item 1',
    completed: false
  },
  {
    id: 2,
    content: 'Item 2',
    completed: true
  },
  {
    id: 3,
    content: 'Item 3',
    completed: false
  }
];

export default class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos,
      newTodo: {
        content: '',
        completed: false
      }
    }
  }
  render(){
    const unCompletedTodoCount = this.state.todos.filter( todo => !todo.completed ).length;
    return (
      <div>
        <TodoHeader
          title={"我的待办事项清单"}
          username={"Anthony"}
          todoCount={unCompletedTodoCount}
        />
        <InputField placeholder="新待办清单" />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}