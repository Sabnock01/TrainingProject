<template>
  <div>
    {{ this.tasks }}
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'TasksTable',
    data() {
      return {
        tasks: []
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
