<template>
  <div>
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
        ]
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
      }
    }
  }
</script>
