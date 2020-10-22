<template>
  <div class="nav">
    <div
      class="nav-item"
      :class="{ active: isActive === '/' }"
      @click="goPage('/')"
    >
      Home
    </div>
    <div
      to="/Users"
      class="nav-item"
      :class="{ active: isActive === '/Users' }"
      @click="goPage('/Users')"
    >
      Users
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isActive: "/",
    };
  },
  methods: {
    goPage(path) {
      this.isActive = path;
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: darkgrey;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.nav-item {
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 16px;
  font-weight: bold;
  margin: 0px 15px;
  text-decoration: none;
}
.active {
  background-color: #000;
  border-radius: 5px;
}
.nav-item:hover {
  background-color: #c7c7c7;
  cursor: pointer;
  border-radius: 5px;
}
</style>