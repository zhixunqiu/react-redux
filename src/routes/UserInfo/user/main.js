/**
 * Created by didi on 17/2/13.
 */
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class UserInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="pad-16">
                <input type="text" style={{width:"200px",height:"30px"}}/>
            </div>
        )
    }
}
module.exports = UserInfo