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
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-5">Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img src="../../assets/img/small-logos/icon-bulb.svg" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                  </div>
                  <div class="my-auto">
                    <input type="text" class="form-control" id="title" placeholder="Your Title" v-model="item.title">
                  </div>
                </div>
              </td>
              <td>
                <input type="text" class="form-control" id="description" placeholder="Your Description" v-model="item.description">
              </td>
              <td>
                <input type="checkbox" name="vehicle2" value="true" v-model="item.completed" checked>
                <label for="vehicle2"> DONE</label><br>
              </td>
              <td>
                <button class="btn btn text-secondary mb-2" @click="editTodoItem(item.id, item)">
                  <i class="fa fa-edit text-xs" aria-hidden="true"></i>
                </button>
              </td>
              <td align="center">
                <button class="btn btn text-secondary mb-3" @click="deleteTodoItem(item.id)">
                  <i class="fa fa-trash text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
        try {
          await TabelDashboard.editTodo(id, updates);
          this.$router.replace({ name: 'ListTodo' });
        } catch (error) {
          console.error(error);
        }
      },
  }
}
</script>
