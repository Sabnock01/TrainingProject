<template>
  <div>
    {{ this.projects }}  
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'ProjectsTable',
    data() {
      return {
        projects: []
      }
    },
    async created() {
      await this.getInitialData();
    },
    methods: {
      async getInitialData() {
        const projects = await axios.get("http://localhost:8000/projects")
        .then((res) => res.data);

        this.projects = projects;
      }
    }
  }
</script>
