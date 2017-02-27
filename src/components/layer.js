/**
 * Created by didi on 17/2/20.
 */
import React, { Component } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

export default class Layer extends Component {
    constructor(){
        super()
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleCancel(){
        this.props.handleCancel();
    }
    render() {
        let {isShow} = this.props;
        return (
            <div>
                {isShow && (<div className="layer"></div>)}
                <ReactCSSTransitionGroup component="div"
                                         transitionName="layer" transitionEnter={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {isShow && (<div className="bottom bottom-0" ref="bottom">
                        <center className="colorred h-50 bgcolor-white fz17 bgcolor-white">
                            <span className="bottombtn pd-t-d">退出企业</span></center>
                        <center className="color333 h-50 bgcolor-white fz17 m-t-10 bgcolor-white" onClick={this.handleCancel}>
                            <span className="bottombtn pd-t-d">取消</span></center>
                    </div>)}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}