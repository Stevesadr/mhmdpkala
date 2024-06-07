import reducerSliceRedux from "./reducerSliceRedux";
const { configureStore } = require("@reduxjs/toolkit");
const Store = configureStore({
    reducer: {
        reducer: reducerSliceRedux
    }
})
export default Store