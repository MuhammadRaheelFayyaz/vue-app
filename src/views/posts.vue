<template>
  <div class="container">
    <h1 class="header">Stay with us</h1>
    <div class="create-post">
      <input class="title-input" v-model="title" placeholder="Write subject" />
      <textarea
        class="desc-input"
        placeholder="Write Description...."
        rows="50"
        v-model="body"
      />
      <div class="btn-row">
        <div class="add-btn" @click="addPost()">Post</div>
      </div>
    </div>
    <div v-for="(post, index) in posts" :key="index" class="post-div">
      <div class="title">{{ post.title }}</div>
      <hr />
      <div class="body">{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
  name: "Posts",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  mounted() {
    if (this.posts.length < 1) this.loadData();
  },
  methods: {
    ...mapMutations(["getPosts", "setPost"]),
    async loadData() {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.posts = res.data;
        this.getPosts(res.data);
      } catch (err) {
        console.log("loadData -> err", err);
        this.data = [];
      }
    },
    async addPost() {
      let { title, body } = this;
      try {
        let res = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            userId: "1",
            title,
            body,
          }
        );
        this.setPost(res.data);
        return;
      } catch (err) {
        console.log("setPost -> err", err);
      }
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style scoped>
.container {
  width: 60%;
  margin: auto;
}
.create-post {
  height: 400px;
  border: #c7c7c7 2px solid;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.create-post .title-input {
  border: none;
  border-bottom: #c7c7c7 2px solid;
  width: 83%;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  height: 30px;
  margin-bottom: 15px;
}
.create-post .desc-input {
  border: #c7c7c7 2px solid;
  width: 80%;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  height: 30px;
  margin-bottom: 15px;
  padding: 15px;
  height: 300px;
}
.create-post .title-input:focus,
.create-post .desc-input:focus {
  outline: none;
}

.header {
  text-align: left;
  margin: 15px 0;
}
.post-div {
  margin: 15px auto;
  border: #c7c7c7 2px solid;
  padding: 15px;
}
.title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  /* text-transform: uppercase; */
  cursor: pointer;
  margin-bottom: 15px;
}
.title:hover {
  color: cornflowerblue;
}
.body {
  text-align: left;
  font-size: 18px;
  width: 80%;
}
.title:first-letter,
.body:first-letter {
  text-transform: uppercase;
}
.btn-row {
  display: flex;
  justify-content: flex-end;
  width: 84%;
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

hr {
  margin: 15px auto;
  background-color: tel;
}
</style>