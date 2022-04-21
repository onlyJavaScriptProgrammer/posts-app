import { createStore } from "vuex";
import instance from "../api/instance";

export default createStore({
  state: () => ({
    posts: [],
    comments: [],
    size: 0,
    transitData: null,
    isUpdating: false,
    index: null,
    modelTextarea: null,
    title: null,
    error: false,
    loading: true,
    isShowPagination: true,
  }),
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getComments(state) {
      return state.comments;
    },
    getUpdateState(state) {
      return state.isUpdating;
    },
    getSize(state) {
      return state.size;
    },
  },
  mutations: {
    pushPosts(state, data) {
      state.posts = data;
    },
    pushSizePages(state, sizePages) {
      state.size = sizePages;
    },
    pushComments(state, payload) {
      state.comments = payload;
    },
    changeUpdate(state) {
      state.isUpdating = !state.isUpdating;
    },
    changeError(state) {
      state.error = !state.error;
    },
    recordTransitData(state, payload) {
      state.transitData = payload;
      state.modelTextarea = payload;
    },
    updatePost(state, id) {
      state.posts[id].body = state.transitData;
    },
    setCurrentIndex(state, payload) {
      state.index = state.posts.findIndex((post) => post.id == payload);
      state.modelTextarea = state.posts[state.index].body;
      state.title = state.posts[state.index].title;
    },
    finishLoading(state) {
      state.loading = false;
    },
    truePagination(state) {
      state.isShowPagination = true;
    },
    falsePagination(state) {
      state.isShowPagination = false;
    },
  },
  actions: {
    async getAllPosts({ commit }, page) {
      try {
        await instance.get(`posts?_page=${page}`).then((response) => {
          commit("pushPosts", response.data);
          commit(
            "pushSizePages",
            Math.ceil(response.headers["x-total-count"] / 10)
          );
          if (response) {
            commit("finishLoading");
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getAllComments({ commit }, id) {
      try {
        await instance.get(`posts/${id}/comments`).then((response) => {
          commit("pushComments", response.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async patchData({ commit, state }, id, payload) {
      try {
        await instance
          .patch(`posts/${id}`, {
            body: payload,
          })
          .then(() => {
            commit("updatePost", state.index);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async searchPosts({ commit }, payload) {
      try {
        await instance.get(`posts?q=${payload}`).then((response) => {
          commit("pushPosts", response.data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
