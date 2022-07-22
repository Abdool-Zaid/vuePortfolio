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
        <a :href="project.liveLink" target="blank"><h4>live</h4></a>
        <a :href="project.githubLink" target="blank"><h4>github</h4></a>
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
  
    margin: var(--se);
    padding: var(--se);
    width: 35vw;
    border: 2px dashed var(--acc);

}
img{
border-radius: 50%;
width: 100%;
aspect-ratio: 2;
}

/* media Querries */

    @media only screen and (max-width: 985px) {
        #projectbody{
          flex-direction: column;
          align-items: center;
        }
    }
    @media only screen and (max-width: 270px) {
        .projectCard{
            
            font-size: 0.6em;
        }        
    }
</style>
