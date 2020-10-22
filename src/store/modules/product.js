import axios from 'axios'
const state = {
    currentProduct: [],
    listProduct: [],
    listProductPaginate: [],
    listProOfCatePaginate: [],
    numberPaginate: {
        total: 1,
        last_page: 1
    },
}
const getters = {
    currentProduct(state){
        return state.currentProduct
    },
    listProduct(state){
        return state.listProduct
    },
    listProductPaginate(state){
        return state.listProductPaginate
    },
    listProOfCatePaginate(state){
        return state.listProOfCatePaginate
    },
    numberPaginate(state){
        return state.numberPaginate
    },
}
const mutations = {
    setNumberPaginate(state, listQuery) {
        state.numberPaginate.total = listQuery.total
        state.numberPaginate.last_page = listQuery.last_page
    },
    setListProduct(state, data) {
        state.listProduct = data
    },
    setCurrentProduct(state, data) {
        state.currentProduct = data
    },
    setListProductPaginate(state, data) {
        state.listProductPaginate = data
    },
    setListProOfCatePaginate(state, data) {
        state.listProOfCatePaginate = data
    },
}
const actions = {
    loadListProduct({ commit }) {
        var newArr = [];
        axios.get("http://laravue.test/api/all-products").then((response) => {          
            commit("setListProduct", response.data.data);
        }, (error) => { console.log(error) });
    },
    loadCurrentProduct({ commit }, unique_id) {
        if (Number.isInteger(Number(unique_id))) {
            axios.get("http://laravue.test/api/products/" + unique_id)
                .then((response) => {
                    commit("setCurrentProduct", response.data.data);
                }, (error) => { console.log(error) });

        }
    },

    loadListProductPaginate({ commit, rootState }) {
        axios.get("http://laravue.test/api/products" + "?limit=" + rootState.listQuery.limit + "&&page=" + rootState.listQuery.page)
            .then((response) => {
                commit("setListProductPaginate", response.data.data);
                commit("setNumberPaginate", response.data.meta);
            }, (error) => { console.log(error) });
    },
    loadListProOfCatePaginate({ commit, rootState }, category_unique_id) {
        if (Number.isInteger(Number(category_unique_id))) {
            axios.get("http://laravue.test/api/products-with-category/" + category_unique_id
                + "?limit=" + rootState.listQuery.limit + "&&page=" + rootState.listQuery.page)
                .then((response) => {
                    commit("setListProOfCatePaginate", response.data.data);
                    commit("setNumberPaginate", response.data.meta);
                }, (error) => { console.log(error) });
        }
    },
}
export default { state, getters, mutations, actions }
