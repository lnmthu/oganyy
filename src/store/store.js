import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Category from './modules/category'
import Product from './modules/product'
import BlogCategory from './modules/blog-category'
import BlogItems from './modules/blog-items'

Vue.use(Vuex)
Vue.use(axios)

export const store = new Vuex.Store({
    state: {
        listQuery: {
            limit: 1,
            page: 1
        },
    },
    getters: {
    },
    mutations: {
        setListQuery(state, listQuery) {
            state.listQuery.limit = listQuery.limit
            state.listQuery.page = listQuery.page
        },
    },
    actions: {
        loadListQuery({ commit }, payload) {
            commit("setListQuery", payload)
        },
    },
    modules:{
        Category,
        Product,
        BlogItems,
        BlogCategory
    }
});
