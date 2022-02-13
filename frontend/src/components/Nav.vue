<template>
  <div>
    <div class="bg-black">
      <div class="px-4 py-4 flex justify-between">
        <div>
          <v-btn class="mx-1" large color="#F8FAFC" text>Users</v-btn>
          <v-btn class="mx-1" large color="#F8FAFC" text>Projects</v-btn>
          <v-btn class="mx-1" large color="#F8FAFC" text>Tasks</v-btn>
        </div>
      </div>
    </div>
    <UsersTable/>
    <ProjectsTable/>
    <TasksTable/>
  </div>
</template>

<script>
  import UsersTable from './UsersTable';
  import ProjectsTable from './ProjectsTable';
  import TasksTable from './TasksTable';

  export default {
    name: 'Nav',
    components: {
      UsersTable,
      ProjectsTable,
      TasksTable,
    },

  }
</script>
