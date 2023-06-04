import { defineStore } from 'pinia';
import { setCookies, certCookies, delCookies } from '@/plugins/cookies';
import * as s$auth from '@/services/auth';
import router from '@/router';

const d$auth = defineStore({
  id: 'auth',
  state: () => ({
    id: undefined,
    name: undefined,
    role: undefined,
  }),
  actions: {
    async a$setUser() {
      try {
        const { id, name, role } = certCookies();
        this.id = id;
        this.name = name;
        this.role = role;
        return 'User Authenticated!';
      } catch (error) {
        this.id = undefined;
        this.name = undefined;
        this.role = undefined;
        throw error.message;
      }
    },
    async a$login(body) {
      try {
        const { data } = await s$auth.login(body);
        setCookies('CERT', data.token, { datetime: data.expiresAt });
        await this.a$setUser();
        return true;
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
    async a$register(body) {
      try {
        const { data } = await s$auth.register(body);
        setCookies('CERT', data.token, { datetime: data.expiresAt });
        await this.a$setUser();
        return true;
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
    async register({ commit }, user) {
      try {
        const response = await this.a$register(user);
        commit('SET_SIGNUP_RESPONSE', response.data);
        router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        delCookies('CERT');
        this.id = undefined;
        this.name = undefined;
        this.role = undefined;
        router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    g$user: ({ id, name, role }) => ({ id, name, role }),
  },
});

export default d$auth;
