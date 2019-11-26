import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.store({
    state: {
      newsArticles: []
    },
    getters: {
      getNewsArticles: (state) => state.newsArticles
    },
    mutations: {
      setNewsArticles(state, newsArticles) {
        state.newsArticles = newsArticles
      }
    },
    actions: {
      async fetchNewsArticles({ commit }, apiUrl) {
        const { items } = await this.$axios.$get(apiUrl)

        commit('setNewsArticles', items)
      }
    }
  })
}

export default createStore
