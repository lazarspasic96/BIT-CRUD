import React from 'react'



class Checkbox extends React.Component {

    render() {
        return <>
            <label for={this.props.for}>
                {this.props.children}  <input type={this.props.type} name={this.props.name} value={this.props.value} className={this.props.className} onChange={this.props.onChange} id={this.props.id} />
            </label>
        </>

    }
}

export default Checkbox