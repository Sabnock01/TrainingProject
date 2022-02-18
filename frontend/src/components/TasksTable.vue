<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tasks"
      class="elevation-4"
    ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'TasksTable',
    data() {
      return {
        tasks: [],
        headers: [
          { text: "Project Id", value: "projectId" },
          { text: "User Id", value: "userId" },
          { text: "Summary", value: "summary" },
          { text: "Description", value: "description" },
          { text: "Status", value: "status" }
        ]
      }
    },
    async created() {
      await this.getInitialData();
    },
    methods: {
      async getInitialData() {
        const tasks = await axios.get("http://localhost:8000/tasks")
        .then((res) => res.data);

        this.tasks = tasks;
      }
    }
  }
</script>
