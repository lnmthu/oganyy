import axios from 'axios'
const state={
    listCategory: [],

}
const getters={
    listCategory(state){
        return state.listCategory
    }
}
const mutations={
    setListCategory(state, data) {
        state.listCategory=data
    },
}
const actions={
    loadListCategory({ commit }) {
        axios.get("http://laravue.test/api/all-categories").then((response) => {
            commit("setListCategory", response.data.data);
        }, (error) => { console.log(error) });
    },
}
export default { state, getters, mutations, actions}
