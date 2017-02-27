import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layer from '../../../components/layer'

import * as mainAction from '../../../actions/main'
import '../../../style/common.css'

function mapStateToProps(state) {
	const { postsForMenu , postsForInfo } = state.main;
	const { mainIsFetching,
			menuIsFetching,
			menu,
			info
		  } = _.assign({},postsForMenu,postsForInfo) || {
			mainIsFetching: true,
			menuIsFetching: true,
			menu: {},
			info: {}
		  }
	return {
		mainIsFetching,
		menuIsFetching,
		menu,
		info
	}
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(mainAction,dispatch)
    }
}

class pageDefault extends Component{
	constructor(props){
		super(props)
		this.setClick = this.setClick.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.state = {
			isShow : false
		}
	}

	componentDidMount() {
		const { initMenu, initInfo } = this.props.actions
		initInfo();
		initMenu();
	}

	setClick(){
		//browserHistory.push('/userDefault')
		//browserHistory.push({
		//	pathname:'/userDefault',
		//	state: 'sss',
		//	search: '?form=index',
		//	query:{'q':'you'}
		//})
		this.setState({isShow : true});
	}

	handleCancel(){
		this.setState({isShow : false});
	}

	render(){
		const { info,menu,mainIsFetching,menuIsFetching } = this.props
		let returnCom = !mainIsFetching && !menuIsFetching ? null :
			(<div className="container">
				<section className="flex fz-24 header">
					<div className="flex-left">欢迎您，{info.name}小姐!</div>
					<span className="block flex-right-40 heart" onClick={this.setClick}></span>
				</section>
				<ul className="fz-16 menu">
					{menu.list.map((v) => {
							return (<li className="flex menu-li">
								<span className="block flex-left">{v}</span>
								<span className="block arrow-right flex-right-20"></span>
							</li>)
						}
					)}
				</ul>
				<Layer isShow={this.state.isShow} handleCancel={this.handleCancel}/>
			</div>)
		return returnCom
	}
}

export default pageDefault = connect(mapStateToProps,mapDispatchToProps)(pageDefault)
module.exports = pageDefault