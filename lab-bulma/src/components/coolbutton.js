import React from 'react'

class CoolButton extends React.Component{
render(){
    let isSmall = (this.props.isSmall) ? 'is-small':'';
    let isDanger = (this.props.isDanger) ? 'is-danger': '';
    let isSuccess= (this.props.isSuccess) ? 'is-success': '';
    return (
        // condition === true ? return this : else return this
        // (true || false ) returns value that is true
        // true && true returns last value that is true
        // true && false returns false
        <button className={`${this.props.className} ${isSmall} ${isDanger} ${isSuccess}`}>
        {this.props.name}
        </button>
    )
};
}

export default CoolButton;