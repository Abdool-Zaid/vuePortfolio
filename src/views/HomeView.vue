<template>
  <!-- <link rel="stylesheet" href="/path/to/flickity.css" media="screen"> -->

  <div ref="container" class="keen-slider" id="mainBody">
    <div class="keen-slider__slide number-slide1"><div class="CContent">

      <landing /></div>
    </div>
    <div class="keen-slider__slide number-slide2"><div class="CContent">

      <about /></div>
    </div>
    <div class="keen-slider__slide number-slide3"><div class="CContent">

      <skills /></div>
    </div>
    <div class="keen-slider__slide number-slide4"><div class="CContent">

      <resume /></div>
    </div>
    <div class="keen-slider__slide number-slide5"><div class="CContent">

      <projects /></div>
    </div>
    <div class="keen-slider__slide number-slide6"><div class="CContent">

      <testimonials /></div>
    </div>
    <div class="keen-slider__slide number-slide7"><div class="CContent">

      <contactForm /></div>
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
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

function ThumbnailPlugin(main) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          main.value.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      addActive(slider.track.details.rel);
      addClickEvents();
      main.value.on("animationStarted", () => {
        removeActive();
        const next = main.value.animator.targetIdx || 0;
        addActive(main.value.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

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
  setup() {
    const [container, slider] = useKeenSlider();
    const [thumbnail] = useKeenSlider(
      {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      [ThumbnailPlugin(slider)]
    );
    return { container, thumbnail };
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
          console.log(this.window.scrollY);
          // page height
          // console.log(window.innerHeight);

          document.getElementsByClassName("jobCard").style = color = "red";
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
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 200px;
  max-height: 100vh;
}
.keen-slider__slide {
  width: 94vw !important;
}
.number-slide1 {
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
}

.number-slide2 {
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
}

.number-slide3 {
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
}

.number-slide4 {
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
}

.number-slide5 {
  background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
}

.number-slide6 {
  background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
    marg
  );
}

.thumbnail .keen-slider__slide {
  font-size: 30px;
  margin-top: 10px;
  height: 100px;
}
.thumbnail .keen-slider__slide {
  cursor: pointer;
}
.thumbnail .keen-slider__slide.active {
  border: 2px dashed black;
}

/* mine */
#mainBody{
  width: 100vw;
  height: 98vh;
  overflow-y:scroll ;

}
#mainBody >*{
  width: 94vw;
}
.keen-slider__slide .CContent{
  margin-top:var(--se)  ;
display: flex;
justify-content: center;
align-items: center;
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
</style>
