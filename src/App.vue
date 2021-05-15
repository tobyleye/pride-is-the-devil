<template>
  <div id="app">
    <loading v-if="loading" />
    <div v-else-if="error" class="error">An error occured</div>
    <project-table v-else :data="data" />
  </div>
</template>

<script>
import ProjectTable from "./components/ProjectTable";
import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    ProjectTable,
    Loading,
  },
  data() {
    return {
      loading: true,
      data: [],
      error: null,
    };
  },
  async mounted() {
    this.fetchProjects();
  },

  methods: {
    async fetchProjects() {
      this.error = null;
      this.loading = true;
      try {
        const { data } = await fetch(
          "https://244b8df3-7491-4cfd-a48b-267f19446372.mock.pstmn.io/"
        ).then((res) => res.json());
        this.data = data;
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.error = true;
      }
    },
  },
};
</script>

<style>
:root {
  --primary-color: #182c4c;
}
body {
  background: #f3f4f4;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  margin-top: 60px;
  margin-bottom: 40px;
}
.error {
  color: red;
}
</style>
