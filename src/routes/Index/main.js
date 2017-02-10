import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as mainAction from '../../actions/main'
import '../../style/common.css'

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

		let returnCom = !mainIsFetching && !menuIsFetching ? null :
			(<div className="container"><section className="fz-30 header">欢迎您，{info.name}小姐！</section>
				<ul className="fz-28 menu">
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