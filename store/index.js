import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.store({
    state: {
      articles: []
    },
    getters: {
      getArticles: state => state.articles
    },
    mutations: {
      setArticles(state, feedArticles) {
        state.articles = feedArticles
      }
    },
    actions: {
      async fetchArticles({ commit }, apiUrl) {
        const fetchedArticles = await this.$axios.$get(apiUrl);

        commit('setArticles', fetchedArticles)
      }
    }
  })
}

export default createStore
