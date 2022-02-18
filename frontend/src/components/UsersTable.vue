<template>
  <div>
    {{ this.users }}
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'UsersTable',
    data() {
      return {
        users: []
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
