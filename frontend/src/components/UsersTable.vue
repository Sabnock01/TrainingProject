<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-dialog
            v-model="deleteDialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs}">
              <v-btn
                class="primary"
                v-bind="attrs"
                v-on="on"
              >Delete User</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Delete user
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="idToDelete"
                        :items="users"
                        item-text="name"
                        item-value="id"
                        label="Name"
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
                  @click="deleteUser"
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
              >Create User</v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                New User
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="createdUser.name"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="createdUser.email"
                        label="Email*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="createdUser.password"
                        label="Password*"
                        type="password"
                        required
                      ></v-text-field>
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
                  @click="createUser"
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
        :items="users"
        class="mx-3 elevation-4"
        dark
      ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'UsersTable',
    data() {
      return {
        users: [],
        headers: [
          { text: "Name", value: "name"},
          { text: "Email", value: "email"}
        ],
        createdUser: {
          name: '',
          email: '',
          password: ''
        },
        idToDelete: null,
        dialog: false,
        deleteDialog: false
      }
    },
    async created() {
      await this.getInitialData();
    },
    methods: {
      async getInitialData() {
        const users = await axios.get("http://localhost:8000/users")
        .then((res) => res.data);

        this.users = users;
      },
      async createUser() {
        await axios.post("http://localhost:8000/users", this.createdUser);

        this.dialog = false;
      },
      async deleteUser() {
        await axios.delete(`http://localhost:8000/users/${this.idToDelete}`)

        this.deleteDialog = false;
      }
    }
  }
</script>
