import React from 'react';
import TodoItem from './todo-item';

export default class TodoList extends React.Component {
    render(){
        const { todos } = this.props;
        let todoItems = todos.map( todo => (
            <div key={todo.id} >
                <TodoItem 
                    content={todo.content} 
                    completed={todo.completed}
                />
            </div>
        ) );
        return (
            <ul>{todoItems}</ul>
        )
    }
}