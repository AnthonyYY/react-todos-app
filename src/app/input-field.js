import React from 'react';

export default class InputField extends React.Component {
    render(){
        return <div>
            <input type="text" {...this.props} />
        </div>
    }
}