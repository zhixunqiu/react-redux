/**
 * Created by didi on 17/2/13.
 */
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'

import Circle from '../../../components/circle'

class UserInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let width = 150,
            height = 150
        return (
            <div>
                <Circle id="circle" width={width} height={height}/>
            </div>
        )
    }
}
module.exports = UserInfo