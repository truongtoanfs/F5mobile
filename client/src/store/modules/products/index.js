import axios from 'axios';
const state = {
    productsList: [],
};

const mutations = {
    UPDATE_PRODUCT_LISTS(state, payload) {
        state.productsList = payload;
    },
};

const actions = {
    getProductsList(context) {
        axios.get('http://localhost:5000/products').then(response => {
            context.commit('UPDATE_PRODUCT_LISTS', response.data);
        }).catch(error => console.log('Error get products:', error));
    }
};

const getters = {
    productsList: state => state.productsList,
    productObjectFromPath: state => path => getProductObjectFromPath(state.productsList ,path),
};

const productsModule = {
    state,
    mutations,
    actions,
    getters,
};

export default productsModule;

function getProductObjectFromPath(data, path) {
    let listName = path.replace(/(\/categories\/|\/series\/iphone-|\/series\/ipad-)/g, '');
    /* find category by name */
    for(let product of data) {
        for(let model of product.modelsList) {
            if(model.category === listName) {
                return model;
            } else {
                const category = model.category.split('-');
                if(category.includes(listName)) {
                    return model.categoryDetail.find(series => series.series === listName);
                }
            }
        }
    }
    
    return undefined;
}