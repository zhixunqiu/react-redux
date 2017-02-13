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
    }
    //,
    //getChildRoutes(partialNextState, cb) {
    //    require.ensure([], (require) => {
    //        cb(null, [
    //            {
    //                path: 'info',
    //                component:require("./user/main")
    //            }
    //            //,
    //            //{
    //            //    path: 'dissolution',
    //            //    component:require("./company/dissolution")
    //            //}
    //        ])
    //    },"router_info")
    //}
}
