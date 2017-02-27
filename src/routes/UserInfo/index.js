/**
 * Created by didi on 17/2/13.
 */
module.exports = {
    path: 'userDefault',
    getIndexRoute(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, {
                component: require('./user/main'),
            })
        },"router_info")
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./user/index.js'))
        },"router_info")
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                {
                    path: 'info',
                    component:require("./user/infoDetail")
                }
                //,
                //{
                //    path: 'dissolution',
                //    component:require("./company/dissolution")
                //}
            ])
        },"router_info")
    }
}
