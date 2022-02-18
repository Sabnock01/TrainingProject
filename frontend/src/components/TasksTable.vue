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
                class="primary"
                v-bind="attrs"
                v-on="on"
              >Create Task</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                New Task
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="createdTask.projectId"
                        :items="projects"
                        item-text="name"
                        item-value="id"
                        label="Project"
                        required
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="createdTask.userId"
                        :items="users"
                        item-text="name"
                        item-value="id"
                        label="Assigned User"
                        required
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="createdTask.summary"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="createdTask.description"
                        label="Description*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="createdTask.status"
                        :items="statuses"
                        label="Status"
                        required
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
                  @click="createTask"
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
        users: [],
        projects: [],
        tasks: [],
        headers: [
          { text: "Project Id", value: "projectId" },
          { text: "User Id", value: "userId" },
          { text: "Summary", value: "summary" },
          { text: "Description", value: "description" },
          { text: "Status", value: "status" }
        ],
        statuses: [
          { text: "Complete" },
          { text: "In Review" },
          { text: "Incomplete" }
        ],
        createdTask: {
          projectId: null,
          userId: null,
          summary: '',
          description: '',
          status: '',
        },
        dialog: false
      }
    },
    async created() {
      await this.getInitialData();
    },
    methods: {
      async getInitialData() {
        const users = await axios.get("http://localhost:8000/users")
        .then((res) => res.data);
        const projects = await axios.get("http://localhost:8000/projects")
        .then((res) => res.data);
        const tasks = await axios.get("http://localhost:8000/tasks")
        .then((res) => res.data);

        this.users = users;
        this.projects = projects;
        this.tasks = tasks;
      },
      async createTask() {
        await axios.post("http://localhost:8000/tasks", this.createdTask)

        this.dialog = false;
      }
    }
  }
</script>
