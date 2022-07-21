<template>
  <div id="projectHeader">
    <h1>Some of my works</h1>
  </div>
  <div id="projectbody">
    <div v-for="project in projects" :key="project">
      <div class="projectCard">
        <img :src="project.preView" alt="preview" />
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <p>techStack: {{ project.techStack }}</p>
        <a :href="project.liveLink"><h4>live</h4></a>
        <a :href="project.githubLink"><h4>github</h4></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects",
  data() {
    return {
      projects: this.$store.state.projects,
    };
  },
};
</script>
<style scoped>
#projectbody{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.projectCard{
    width: 35vw;
}
img{
border-radius: 50%;
width: 100%;
aspect-ratio: 2;
}
</style>
