<template>
  <v-navigation-drawer class="primary" v-model="drawer" absolute temporary>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content @click="goTo(item.route)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigatorMenu",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", route: 'home'},
        { title: "About", route: 'about'}
      ]
    };
  },
	created() {
		this.$bus.on('callNavigator', () => {
			this.drawer = !this.drawer;
		});
	},
	methods: {
		goTo(route) {
			this.$router.push({ name: route });
		}
	}
};
</script>

<style lang='scss' scoped>
</style>