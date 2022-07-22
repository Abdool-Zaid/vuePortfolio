<template>
  <div>resume page</div>
  <div id="resumeBody">
    <div class="jobCard" v-for="job in resume" :key="job">
      <h1>{{ job.name }}</h1>
      <h4>{{ job.jobTitle }}</h4>
      <p>{{ job.desc }}</p>
      <ul>
        <li>{{ job.development[0].skill }}</li>
        <!-- <li>{{job.development[1].skill}}</li> -->
      </ul>
      <p>duration: {{ job.duration }}</p>
      <a :href="job.link" target="blank"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "resume",
  data() {
    return {
      resume: this.$store.state.resume,
    };
  },
};
</script>
<style scoped>
*{

    /* overflow-y: scroll !important; */
}
#resumeBody {
  width: 94vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.jobCard {
  margin: var(--se);
  padding: var(--se);
  color: var(--thirty);
  background-color: var(--sixty);
  /* border: 3px solid var(--acc); */
  box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px var(--acc);
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
/* media Querries */
@media only screen and (max-width: 460px) {
  .jobCard {
    font-size: small;
  }
}
</style>
