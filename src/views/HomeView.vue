<template>
  <div id="mainBody">
    <carousel :autoplay="true" :nav="false">
      <about />
      <resume />
      <skills />
      <projects />
      <testimonials />
      <contactForm />
    </carousel>
  </div>
</template>

<script>
import about from "../components/about.vue";
import resume from "../components/resume.vue";
import skills from "../components/skills.vue";
import testimonials from "../components/testimonials.vue";
import contactForm from "../components/contact.vue";
import Projects from "../components/projects.vue";
import carousel from "vue-owl-carousel";

export default {
  components: {
    about,
    skills,
    testimonials,
    resume,
    contactForm,
    Projects,
    carousel,
  },
  mounted() {
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        // total height
        let docHeight =
          document.height !== undefined
            ? document.height
            : document.body.offsetHeight;

        if (st > lastScrollTop) {
          //current position
          // console.log(this.window.scrollY);
          // page height
          // console.log(window.innerHeight);

          document.getElementsByClassName("scrollContent").innerHTMl.style;
          // transform = "scale(0)";
          console.log("scroll down");
        } else {
          console.log("scroll up");
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
    window.addEventListener("contextmenu", (Event) => {
      document.getElementById("target").classList.toggle("miniNotepad");
      console.log("toggled", Math.random() * 10);
      Event.preventDefault();
    });
  },
  data() {
    return {
      lastVal: this.$store.state.lastVal,
    };
  },
};
</script>
<style>
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
</style>
