/**
 * Created by didi on 17/2/14.
 */
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'

class UserDefault extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //return this.props.children
        return (
            <div className="pad-16">
                <input type="text" style={{width:"200px",height:"30px"}} ref="search" value={this.props.location.search}/>
                {this.props.children}
            </div>
        )
    }
}
module.exports = UserDefault