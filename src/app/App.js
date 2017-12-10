import React from 'react';
import './App.css';

function TodoHeader(props){
  return <div>
    <h3>我的待办清单</h3>
      {props.count}项待办事项
    </div>
}

function TodoAdder(props){
  return <div>
    <fieldset>
      <input 
      type="text" 
      value={props.newTodo.content} 
      placeholder="添加新待办事项"
      onChange={ e => props.newTodoChangeHandler(e) } />
      <button onClick={ () => { props.addNewTodo } }>新增</button>
    </fieldset>
  </div>
}

function TodoList(props){
  let todos = props.todos.map( (todo, index) => <li key={index}>
    <input type="checkbox" checked={todo.finished} onChange={ () => { props.finishTodo(todo) }}/>
    {todo.content}
    <span onClick={ () => { props.removeTodo(todo) } }>X</span>
  </li> );
  return <ul>
    {todos}
  </ul>
}

export default class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: props.todos,
      newTodo: {
        content: '',
        finished: false
      }
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.newTodoUpdateHandler = this.newTodoUpdateHandler.bind(this);
    this.finisheTodo = this.finisheTodo.bind(this);
  }

  newTodoUpdateHandler(e){
    this.setState({
      newTodo: {
        content: e.value
      }
    });
  }

  addNewTodo(){
    let todos = this.state.todos.concat.slice();
    todos.unshift(this.state.newTodo);
    this.setState({
      todos: todos
    })
  }

  finisheTodo(todo){
    let todos = this.state.todos;
    let toFinishTodoIndex = todos.indexOf(todo);
    todos[toFinishTodoIndex].finished = !todos[toFinishTodoIndex].finished;
    this.setState({
      todos: todos
    })
  }

  render(){
    const unCompleteTodos = this.state.todos.filter( todo => todo.finished === false );
    return <div className="todo-app">
      <TodoHeader count={unCompleteTodos.length} />
      <TodoAdder 
      newTodo={this.state.newTodo}
      addNewTodo={this.addNewTodo}
      newTodoChangeHandler={this.newTodoUpdateHandler}/>
      <TodoList todos={this.state.todos} finishTodo={this.finisheTodo} />
    </div>
  }
}