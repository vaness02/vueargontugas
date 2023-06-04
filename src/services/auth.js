import { baseApi } from '@/plugins/axios';

const api = '/auth';

const logout = () => baseApi.get(`${api}/logout`);
const login = (body) => baseApi.post(`${api}/login`, body);
const register = (body) => baseApi.post(`${api}/register`, body);


export { login, register, logout };
