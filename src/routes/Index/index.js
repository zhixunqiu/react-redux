/**
 * Created by didi on 17/2/13.
 */
module.exports = {
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require("./main/main"))
        }, "index")
    }
}