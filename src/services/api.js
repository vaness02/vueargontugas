import { baseApi } from '@/plugins/axios';

const api = '/api';

const list = () => baseApi.get(`${api}/todo`);
const add = (body) => baseApi.post(`${api}/todo`, body);
const editTodo = (id, body) => baseApi.put(`${api}/todo/${id}`, body);
const deleteTodo = (id) => baseApi.delete(`${api}/todo/${id}`);


// const list = () => baseApi.get(api);
// const add = (body) => baseApi.post(api, body);
// const editTodo = (id, body) => baseApi.put(`${api}/${id}`, body);
// const deleteTodo = (id) => baseApi.delete(`${api}/${id}`);


export { list, add, editTodo, deleteTodo };


