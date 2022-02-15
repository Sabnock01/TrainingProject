<template>
   <v-app id="app">
      <template v-if="!$route.path.includes('login')">
         <v-navigation-drawer v-model="drawer" fixed app>
            <v-toolbar flat dark color="primary">
               <v-list>
                  <v-list-item>
                     <v-list-item-title class="title">
                        Simply Clinical Software
                     </v-list-item-title>
                  </v-list-item>
               </v-list>
            </v-toolbar>
            <v-list dense>
               <v-list-item @click="drawer = false;" to="/login">
                  <v-list-item-action>
                     <v-icon>mdi-home</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Login</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
               <v-list-item @click="drawer = false;">
                  <v-list-item-action>
                     <v-icon>mdi-card-account-mail</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                     <v-list-item-title>Contact</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
            </v-list>
         </v-navigation-drawer>
         <v-app-bar color="primary" dark fixed app>
            <v-app-bar-nav-icon
               @click.stop="drawer = !drawer;"
            ></v-app-bar-nav-icon>
            <div>
               <div class="bg-black">
                  <div class="px-4 flex justify-between">
                  <div>
                     <v-btn class="mx-1" large color="#F8FAFC" text>Users</v-btn>
                     <v-btn class="mx-1" large color="#F8FAFC" text>Projects</v-btn>
                     <v-btn class="mx-1" large color="#F8FAFC" text>Tasks</v-btn>
                  </div>
                  </div>
               </div>
            </div>
         </v-app-bar>
      </template>
      <v-main>
         <keep-alive :include="['Login']">
            <router-view></router-view>
         </keep-alive>
      </v-main>
   </v-app>
</template>

<script>
export default {
   data: () => ({
      drawer: false,
   }),
   props: {
      source: String,
   },
};
</script>

<script>
export default {
   name: 'App',
   data() {
      return {
         drawer: false,
      };
   },
};
</script>

<style></style>
