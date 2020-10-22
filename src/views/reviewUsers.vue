<template>
  <div>
    <div class="table-div" v-if="users !== []">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody v-for="(user, index) in users" :key="index">
          <tr>
            <td>{{ index }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="add-more" @click="$router.push({ path: '/add-record' })">
      Add More
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  name: "Review",

  data() {
    return {
      // users: [],
    };
  },
  mounted() {
    if (this.users.length < 1) this.loadData();
  },

  methods: {
    ...mapActions(["getUsers"]),
    async loadData() {
      try {
        let data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.getUsers(data.data);
      } catch (err) {
        this.users = [];
      }
    },
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style  scoped>
.table-div {
  display: flex;
  justify-content: center;
}
.table-div table th,
td {
  min-width: 120px;
  border: 1px solid darkgrey;
  padding: 15px;
}
.add-more {
  background-color: #000;
  color: white;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  margin: 15px auto 0 auto;
}
</style>