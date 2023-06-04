import { defineStore } from 'pinia';
import { list, add, editTodo, deleteTodo } from '@/services/api';

const dashboardStore = defineStore({
  id: 'api',
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      try {
        this.todos = await list();
      } catch (error) {
        console.error(error);
      }
    },
    async addTodoItem(body) {
      try {
        await add(body);
        await this.fetchTodos();
      } catch (error) {
        console.error(error);
      }
    },
    async editTodoItem(id, body) {
      try {
        await editTodo(id, body);
        await this.fetchTodos();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodoItem(id) {
      try {
        await deleteTodo(id);
        await this.fetchTodos();
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default dashboardStore;
