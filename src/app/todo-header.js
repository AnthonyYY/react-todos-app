import React from 'react';

export default class TodoHeader extends React.Component {
    render(){
        const {
            title,
            username,
            todoCount
        } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <span>哈罗，{username}：你有{todoCount}项待办事项</span>
            </div>
        );
    }
}