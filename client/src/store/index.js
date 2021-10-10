import products from './modules/products';
import { createStore } from 'vuex';
const store = createStore({
    modules: {
        products,
    }
})

export default store;