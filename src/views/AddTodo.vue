<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Todo List</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <img src="../assets/img/small-logos/icon-bulb.svg" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                  <input type="text" class="form-control" placeholder="Your Title" v-model="form.title">
                </div>
              </td>
              <td>
                <input type="text" class="form-control" placeholder="Your Description" v-model="form.description">
              </td>
              <td>
                <input type="text" class="form-control" placeholder="Your Category" v-model="form.category">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <button class="btn btn-primary btn-lg" @click="addTodo">Submit</button>
      <p v-if="showNotification" class="text-success mt-2">Item successfully added!</p>
    </div>
  </div>
</template>

<style>
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

  <script>
  import { defineComponent } from 'vue';
  import * as dashboardService from '@/services/api';
  
  export default defineComponent({
    name: 'Todo',
    data() {
        return{
            form: {
                title: '',
                description: '',
                category: ''
            },
            showNotification: false
        };
    },
    methods: {
      async addTodo() {
        try {
            const response = await dashboardService.add(this.form);
            console.log(response); // Optional: Log the response data if needed
        } catch (error) {
            console.error(error);
        }
        this.showNotification = true;
        this.form = {
        title: '',
        description: '',
        category: ''
      };
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
        },
        
        
    },
    computed: {
      todos() {
        return dashboardService.todos;
      },
    },
    created() {
      dashboardService.list();
    },
  });
  </script>
  