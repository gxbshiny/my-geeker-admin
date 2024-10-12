import { defineStore } from "pinia";

const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    user: {
      id: 1, name: 'admin', password: '123456', avatar: 'https://wpimg.wallst'
    },
  }),

  getters: {
    getToken: (state) => {
      if (!state.token) {
        state.token = localStorage.getItem('token') || '';
      }
      return state.token;
    },
  },

  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    setUser(user: any) {
      this.user = user;
    }
  }
});


export { useUserStore };