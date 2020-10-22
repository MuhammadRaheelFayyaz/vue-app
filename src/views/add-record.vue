<template>
  <div>
    <div class="form">
      <div class="form-group">
        <label>Name:</label>
        <input
          class="form-input"
          placeholder="Muhammad Raheel Fayyaz"
          v-model="name"
          id="name"
        />
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder="test@gmail.com"
          class="form-input"
          v-model="email"
          id="email"
        />
      </div>
      <div class="btn-row">
        <div class="add-btn" @click="addUser()">Add</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddRecord",
  components: {},
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["setUser"]),

    addUser() {
      let { name, email } = this;
      if (name === "") {
        let ele = document.getElementById("name");
        ele.style.border = "1px red solid";
        ele.focus();
        return false;
      }
      if (email === "") {
        let ele = document.getElementById("email");
        ele.style.border = "1px red solid";
        ele.focus();
        return false;
      }
      this.setUser({ name, email });
      this.name = "";
      this.email = "";
      this.$router.push({ path: "/Users" });
    },
  },
};
</script>

<style  scoped>
.form {
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-group label {
  font-size: 24px;
  font-weight: bolds;
}
.form-group .form-input {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  margin: 15px 0;
  padding: 0 10px;
  font-size: 16px;
}
.btn-row {
  display: flex;
  justify-content: flex-end;
}
.add-btn {
  width: 150px;
  background-color: #000;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>