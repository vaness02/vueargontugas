<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Nama Kelompok</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-3">Status</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">Edit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img src="../assets/img/small-logos/icon-bulb.svg" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ item.title }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ item.description }}</p>
              </td>
              <td>
                <span class="badge badge-sm bg-gradient-success" v-if="item.completed">DONE</span>
                <span class="badge badge-sm bg-gradient-danger" v-else>NOT DONE</span>
              </td>
              <td>
                <button class="btn btn text-secondary mb-0" @click="editTodoItem(item.id, item)">
                  <i class="fa fa-edit text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <button class="btn btn-primary" @click="$router.push({ name: 'AddTodo' })">Add Todo</button>
    </div>
  </div>
</template>

<script>
import * as TabelDashboard from '@/services/api';

export default {
  name: "projects-table",
  data() {
    return {
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      TabelDashboard.list()
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    async deleteTodoItem(id) {
      try {
        await TabelDashboard.deleteTodo(id);
        // Refresh data after successful deletion
        this.fetchData();
      } catch (error) {
        console.error(error);
      }
    },
    async editTodoItem(id, updates) {
      this.$router.replace({ name: 'EditTodo' });
    },
  }
}
</script>