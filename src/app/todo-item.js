import React from 'react';
export default class TodoItem extends React.Component{
    render(){
        const {
            completed,
            content
        } = this.props;

        return (
            <div>
                <input type="checkbox" checked={completed} onChange={this.props.onChange} />
                <InputField value={} />
                <button>X</button>
            </div>
        );
    }
}