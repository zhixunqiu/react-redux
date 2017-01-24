import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as mainAction from '../../actions/main'
import '../../style/global.css'

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
	constructor(){
		super()
	}

	componentDidMount() {
		const { initMenu, initInfo } = this.props.actions
		initInfo();
		initMenu();
	}

	render(){
		const { info,menu,mainIsFetching,menuIsFetching } = this.props
		return (
			<div>
				<section>欢迎您，{info.name}小姐！</section>
				<section className="list">
					<div>ddd</div>
				</section>
			</div>
		)
	}
}

export default pageDefault = connect(mapStateToProps,mapDispatchToProps)(pageDefault)
module.exports = pageDefault