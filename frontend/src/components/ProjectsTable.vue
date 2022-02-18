<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="projects"
      class="elevation-4"
    ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'ProjectsTable',
    data() {
      return {
        projects: [],
        headers: [
          { text: "Name", value: "name" },
          { text: "Lead Id", value: "leadId" }
        ]
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
