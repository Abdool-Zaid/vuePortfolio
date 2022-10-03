<template>

<div id="mainCarousel" class="carousel slide" data-bs-ride="true">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <landing />
    </div>
    <div class="carousel-item">
      <about />
    </div>
    <div class="carousel-item">
      <skills />
    </div>
    <div class="carousel-item">
      <resume />
    </div>
    <div class="carousel-item">
      <projects />
    </div>
    <div class="carousel-item">
      <testimonials />
    </div>
    <div class="carousel-item">
      <contactForm />
    </div>
  </div>
</div>
</template>

<script>
import about from "../components/about.vue";
import resume from "../components/resume.vue";
import skills from "../components/skills.vue";
import testimonials from "../components/testimonials.vue";
import contactForm from "../components/contact.vue";
import Projects from "../components/projects.vue";
import landing from "../components/landing.vue";


export default {
  components: {
    about,
    skills,
    testimonials,
    resume,
    contactForm,
    Projects,
    landing,
  },

  data() {
    return {
    };
  },
};
</script>
<style>
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* mine */
#mainBody {
  width: 100vw;
  height: 98vh;
}
#scrollBody {
  background-color: var(--mute);
  color: var(--mute);
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* .scrollContent {
  position: fixed;
  top: 0;
  transform-origin: top;
  transform: scale(0);
} */
.pageFlowControl{
position:fixed;
top:0;
height: 10vw;
background-color: black;
}
</style>
