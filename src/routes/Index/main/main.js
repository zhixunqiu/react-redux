import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
	}

	componentDidMount() {
		const { initMenu, initInfo } = this.props.actions
		initInfo();
		initMenu();
	}

	setClick(){
		browserHistory.push('/userDefault')
	}

	render(){
		const { info,menu,mainIsFetching,menuIsFetching } = this.props
		let returnCom = !mainIsFetching && !menuIsFetching ? null :
			(<div className="container">
				<section className="flex fz-24 header">
					<span className="flex-left">欢迎您，{info.name}小姐!</span>
					<i className="flex-right" onClick={this.setClick}>1</i>
				</section>
				<ul className="fz-16 menu">
					{menu.list.map((v) => {
							return (<li className="flex menu-li">
								<span className="flex-left">{v}</span>
								<span className="arrow-right flex-right"></span>
							</li>)
						}
					)}
				</ul>
			</div>)
		return returnCom
	}
}

export default pageDefault = connect(mapStateToProps,mapDispatchToProps)(pageDefault)
module.exports = pageDefault