import exp from "constants"

const all = {
    fn1: function() {
        alert('fn1')
    },
    fn2: function() {
        alert('fn2')
    },
}

const aa = {
    fn1: all.fn1,
    fn2: all.fn2,
}
// export all 
export default all