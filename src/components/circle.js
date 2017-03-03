/**
 * Created by didi on 17/3/3.
 */
import React, { Component } from "react"
export default class Circle extends Component {
    constructor(){
        super()
    }

    getContext(){
        return this.refs.canvas.getContext('2d')
    }

    drawCircle(){
        const {width,height} = this.props
        const  ctx = this.getContext()
        const x = width/2,
              y = height/2,
            radius = 70

        //绘制全圆环
        ctx.beginPath();
        ctx.arc(x, y, radius, 0 , 2*Math.PI , false);
        ctx.strokeStyle = '#FA8919';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    moveArc(){

    }

    componentDidMount(){
        this.drawCircle()
    }

    render() {
        let width = this.props.width * this.props.scale
        let height = this.props.height * this.props.scale
        let style = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            React.createElement('canvas',{
                ref: 'canvas',
                className: this.props.className,
                id: this.props.id,
                width: width,
                height: height,
                style: style
            })
        )
    }
}

Circle.propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    scale: React.PropTypes.number.isRequired
}
Circle.defaultProps = {
    scale: window.devicePixelRatio || 1
}// ES6这种方式创建的类不支持getDefaultProps