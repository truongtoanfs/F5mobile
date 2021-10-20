import axios from 'axios';

const state = {
    productsList: [],
    iphone11List: [],
    iphone11ProList: [],
    iphone11ProMaxList: [],
    iphone11Series: [],
    iphoneXList: [],
    iphoneXsList: [],
    iphoneXsMaxList: [],
    iphoneXrList: [],
    iphone8List: [],
    iphone8PlusList: [],
    iphone7List: [],
    iphone7PlusList: [],
    iphone6List: [],
    iphone6SList: [],
    iphone6PLusList: [],
    iphone6SPlusList: [],
};

const mutations = {
    UPDATE_PRODUCT_LISTS(state, payload) {
        state.productsList = payload;
        state.iphone11List = getDetailProductList(payload, '11/11pro/11promax', 'iphone 11');
        state.iphone11ProList = getDetailProductList(payload, '11/11pro/11promax', 'iphone 11 pro');
        state.iphone11ProMaxList = getDetailProductList(payload, '11/11pro/11promax', 'iphone 11 pro max');
        state.iphone11Series = state.iphone11List.concat(state.iphone11ProList).concat(state.iphone11ProMaxList);
        state.iphoneXList = getDetailProductList(payload, 'x/xs/xsmax/xr', 'iphone x');
        state.iphoneXsList = getDetailProductList(payload, 'x/xs/xsmax/xr', 'iphone xs');
        state.iphoneXsMaxList = getDetailProductList(payload, 'x/xs/xsmax/xr', 'iphone xs max');
        state.iphoneXrList = getDetailProductList(payload, 'x/xs/xsmax/xr', 'iphone xr');
        state.iphoneXSeries = state.iphoneXList.concat(state.iphoneXsList).concat(state.iphoneXsMaxList).concat(state.iphoneXrList);
        state.iphone8List = getDetailProductList(payload, '8/8plus', 'iphone 8');
        state.iphone8PlusList = getDetailProductList(payload, '8/8plus', 'iphone 8 plus');
        state.iphone8Series = state.iphone8List.concat(state.iphone8PlusList);
        state.iphone7List = getDetailProductList(payload, '7/7plus', 'iphone 7');
        state.iphone7PlusList = getDetailProductList(payload, '7/7plus', 'iphone 7 plus');
        state.iphone7Series = state.iphone7List.concat(state.iphone7PlusList);
        state.iphone6List = getDetailProductList(payload, '6/6s/6plus/6splus', 'iphone 6');
        state.iphone6SList = getDetailProductList(payload, '6/6s/6plus/6splus', 'iphone 6s');
        state.iphone6PLusList = getDetailProductList(payload, '6/6s/6plus/6splus', 'iphone 6 plus');
        state.iphone6SPlusList = getDetailProductList(payload, '6/6s/6plus/6splus', 'iphone 6s plus');
        state.iphone6Series = state.iphone6List.concat(state.iphone6SList).concat(state.iphone6PLusList).concat(state.iphone6SPlusList);
    },
};

const actions = {
    getProductsList({ commit, state }) {
        axios.get('http://localhost:5000/products').then(response => {
            commit('UPDATE_PRODUCT_LISTS', response.data);
        }).catch(error => console.log('Error get products:', error));
    }
};

const getters = {
    productsList: state => state.productsList,
    productCategoryFromName: state => categoryName => state[categoryName],
};

const productsModule = {
    state,
    mutations,
    actions,
    getters,
};

export default productsModule;

function getDetailProductList(data, categoryName, type) {
    const findCategory = data.find(item => item.category === categoryName);
    return findCategory.categoryDetail.find(item => item.type === type).products;
}