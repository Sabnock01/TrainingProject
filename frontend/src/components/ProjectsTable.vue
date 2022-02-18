<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-dialog
            v-model="updateDialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="primary mx-1"
                v-bind="attrs"
                v-on="on"
              >Update Project</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Update Project
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="idToUpdate"
                        :items="projects"
                        item-text="name"
                        item-value="id"
                        label="Project"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="project.name"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="project.leadId"
                        :items="users"
                        item-text="name"
                        item-value="id"
                        label="Project Lead*"
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
                  @click="updateDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="updateProject"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="deleteDialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs}">
              <v-btn
                class="primary mx-1"
                v-bind="attrs"
                v-on="on"
              >Delete Project</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Delete Project
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="idToDelete"
                        :items="projects"
                        item-text="name"
                        item-value="id"
                        label="Project"
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
                  @click="deleteDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="deleteProject"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="project.name"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="project.leadId"
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
            </v-card>
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
        project: {
          name: '',
          leadId: null
        },
        idToUpdate: null,
        idToDelete: null,
        dialog: false,
        deleteDialog: false,
        updateDialog: false
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
        await axios.post("http://localhost:8000/projects", this.project);

        this.dialog = false;
      },
      async deleteProject() {
        await axios.delete(`http://localhost:8000/projects/${this.idToDelete}`);

        this.deleteDialog = false;
      },
      async updateProject() {
        await axios.put(`http://localhost:8000/projects/${this.idToUpdate}`, this.project);

        this.updateDialog = false;
      }
    }
  }
</script>
