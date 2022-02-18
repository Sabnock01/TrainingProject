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
      class="elevation-4"
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

        this.users = users;
      },
      async createUser() {
        await axios.post("http://localhost:8000/users", this.createdUser);

        this.dialog = false;
      }
    }
  }
</script>
