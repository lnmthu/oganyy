import axios from 'axios'
const state = {
    currentBlog: [],
    listBlogItems: [],
    listBlogItemsPaginate: [],
    listBlogOfCategoryPaginate: [],
    numberPaginate: {
        total: 1,
        last_page: 1
    },
}
const getters = {
    currentBlog(state){
        return state.currentBlog
    },
    listBlogItems(state){
        return state.listBlogItems
    },
    listBlogItemsPaginate(state){
        return state.listBlogItemsPaginate
    },
    listBlogOfCategoryPaginate(state){
        return state.listBlogOfCategoryPaginate
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
    setListBlogItems(state, data) {
        state.listBlogItems = data
    },
    setCurrentBlog(state, data) {
        state.currentBlog = data
    },
    setListBlogItemsPaginate(state, data) {
        state.listBlogItemsPaginate = data
    },
    setListBlogOfCategoryPaginate(state, data) {
        state.listBlogOfCategoryPaginate = data
    },
}
const actions = {
    loadListBlogItems({ commit }) {
        axios.get("http://laravue.test/api/all-blog-items").then((response) => {
            commit("setListBlogItems", response.data.data);
        }, (error) => { console.log(error) });
    },
    loadCurrentBlog({ commit }, unique_id) {
        if (Number.isInteger(Number(unique_id))) {
            axios.get("http://laravue.test/api/blog-items/" + unique_id)
                .then((response) => {
                    commit("setCurrentBlog", response.data.data);
                }, (error) => { console.log(error) });

        }
    },
    loadListBlogItemsPaginate({ commit, rootState }) {
        axios.get("http://laravue.test/api/blog-items" + "?limit=" + rootState.listQuery.limit + "&&page=" + rootState.listQuery.page)
            .then((response) => {
                commit("setListBlogItemsPaginate", response.data.data);
                commit("setNumberPaginate", response.data.meta);
            }, (error) => { console.log(error) });
    },
    loadListBlogOfCategoryPaginate({ commit, rootState }, category_unique_id) {
        if (Number.isInteger(Number(category_unique_id))) {
            axios.get("http://laravue.test/api/paginate-blog-category/" + category_unique_id
                + "?limit=" + rootState.listQuery.limit + "&&page=" + rootState.listQuery.page)
                .then((response) => {
                    commit("setListBlogOfCategoryPaginate", response.data.data);
                    commit("setNumberPaginate", response.data.meta);
                }, (error) => { console.log(error) });
        }
    },
}
export default { state, getters, mutations, actions }
