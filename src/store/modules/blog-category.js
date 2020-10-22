import axios from 'axios'
const state={
    listBlogCategory: [],

}
const getters={
    listBlogCategory(state){
        return state.listBlogCategory
    }
}
const mutations={
    setListBlogCategory(state, data) {
        state.listBlogCategory=data
    },
}
const actions={
    loadListBlogCategory({ commit }) {
        axios.get("http://laravue.test/api/all-blog-categories").then((response) => {
            commit("setListBlogCategory", response.data.data);
        }, (error) => { console.log(error) });
    },
}
export default { state, getters, mutations, actions}
