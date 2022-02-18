<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
              >Create Project</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                New Project
              </v-card-title>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
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
