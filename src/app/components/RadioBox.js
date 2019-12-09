import React from 'react';
import { throwStatement } from '@babel/types';


class RadioBox extends React.Component {



    render() {
        return <>
            <label for={this.props.for}>
                {this.props.children} <input type='radio' name={this.props.name} value={this.props.value} onchange={this.props.onchange} id={this.props.id} />
            </label>

        </>
    }
}

export default RadioBox;