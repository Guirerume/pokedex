<template>
  <v-app>
    <v-app-bar app>      
      <v-toolbar-title class="headline text-uppercase">
        <span>Pokedex</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="callNavigatorMenu()"
        target="_blank"
      >
        <span class="mr-2">Menu</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <NavigatorMenu/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavigatorMenu from '@/components/navigatorMenu/NavigatorMenu';

export default {
  name: 'Teta',
  components: {
    NavigatorMenu
  },
  methods: {
    callNavigatorMenu() {
      this.$bus.emit('callNavigator');
    }
  }
};
</script>
