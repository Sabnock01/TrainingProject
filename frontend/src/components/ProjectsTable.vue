<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="primary"
                v-bind="attrs"
                v-on="on"
              >Create Project</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                New Project
              </v-card-title>
            </v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="createdProject.name"
                      label="Name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      v-model="createdProject.leadId"
                      :items="users"
                      item-text="name"
                      item-value="id"
                      label="Project Lead"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="createProject"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
    <v-data-table
      :headers="headers"
      :items="projects"
      class=" mx-3 elevation-4"
      dark
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
        users: [],
        headers: [
          { text: "Name", value: "name" },
          { text: "Lead Id", value: "leadId" }
        ],
        createdProject: {
          name: '',
          leadId: null
        },
        dialog: false
      }
    },
    async created() {
      await this.getInitialData();
    },
    methods: {
      async getInitialData() {
        const projects = await axios.get("http://localhost:8000/projects")
        .then((res) => res.data);

        const users = await axios.get("http://localhost:8000/users")
        .then((res) => (res.data));

        this.projects = projects;
        this.users = users;
      },
      async createProject() {
        await axios.post("http://localhost:8000/projects", this.createdProject)

        this.dialog = false;
      }
    }
  }
</script>
