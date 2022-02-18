<template>
    <v-app id="app">
        <template v-if="!$route.path.includes('login')">
            <v-navigation-drawer v-model="drawer" fixed app temporary>
                <v-list dense color="primary">
                <v-list-item @click="drawer = false;" to="/login">
                    <v-list-item-action>
                        <v-icon color="white">mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="text-white">Sign Out</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="drawer = false;">
                    <v-list-item-action>
                        <v-icon color="white">mdi-information</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="text-white">About</v-list-item-title>
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
                        <router-link to="/home"><v-btn class="mx-1" large color="#F8FAFC" text>Home</v-btn></router-link>
                        <router-link to="/users-table"><v-btn class="mx-1" large color="#F8FAFC" text>Users</v-btn></router-link>
                        <router-link to="/projects-table"><v-btn class="mx-1" large color="#F8FAFC" text>Projects</v-btn></router-link>
                        <router-link to="/tasks-table"><v-btn class="mx-1" large color="#F8FAFC" text>Tasks</v-btn></router-link>
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
    name: 'NavBar',
    data() {
        return {
            drawer: false,
        };
    },
}
</script>
