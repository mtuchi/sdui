import { createStore } from 'vuex'
import article from '@/services/article'

const store = createStore({
  state() {
    return {
      articles: [],
      article: {}
    }
  },
  mutations: {
    ADD_ARTICLE({ articles }, payload) {
      articles.push(payload)
    },
    REMOVE_ARTICLE: ({ articles }, article) => {
      articles.splice(articles.indexOf(article), 1)
    },
    LOAD_ARTICLES: (state, data) => {
      state.articles = data;
    },
    STORE_ARTICLE: (state, data) => {
      state.article = data
    }
  },
  actions: {
    loadArticles({ commit }) {
      return article.getAll().then((res) => {
        commit("LOAD_ARTICLES", res.data);
      })
    },
    fetchArticle({ commit }, id) {
      return article.get(id).then((res) => {
        commit("STORE_ARTICLE", res.data)
      })
    },
    addArticle({ commit }, payload) {
      return article.create(payload).then((res) => {
        commit("ADD_ARTICLE", res.data);
      }).catch((err) => {
        console.log(err)
      })
    },
    updateArticle({ commit }, payload) {
      return article.update(payload.id, payload).then((res) => {
        commit("STORE_ARTICLE", res.data);
      }).catch((err) => {
        console.log(err)
      })
    },
    removeArticle({ commit }, id) {
      return article.delete(id).then((res) => {
        commit("REMOVE_ARTICLE", id)
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  getters: {
    getArticles(state) {
      return state.articles;
    },
    getArticle(state) {
      return state.article;
    }
  }
})

export default store;