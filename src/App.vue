<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap"
    rel="stylesheet"
  />

  <div class="cursor"></div>
  <div class="cursor2"></div>

  <div v-on="scroll">
    <div id="logo">
      <h3
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="exitNav()"
      >
        Abdool Zaid
      </h3>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <button>
              <h3
                type="button"
                data-bs-target="#mainCarousel"
                @click="exitNav()"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
              >
                Home
              </h3>
            </button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              @click="exitNav()"
              data-bs-slide-to="1"
            >
              <h3>About</h3>
            </button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              @click="exitNav()"
              data-bs-slide-to="2"
            >
              <h3>skills</h3>
            </button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              @click="exitNav()"
              data-bs-slide-to="3"
            >
              <h3>resume</h3>
            </button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              @click="exitNav()"
              data-bs-slide-to="4"
            >
              <h3>projects</h3>
            </button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              @click="exitNav()"
              data-bs-slide-to="5"
            >
              <h3>testimonials</h3>
            </button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              @click="exitNav()"
              data-bs-slide-to="6"
            >
              <h3>contact</h3>
            </button>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <router-view />

    <footer>
      <p
        type="button"
        data-bs-target="#mainCarousel"
        @click="exitNav()"
        data-bs-slide-to="6"
      >
        contact
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    
let cursor = document.querySelector('.cursor');
let cursorinner = document.querySelector('.cursor2');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
  },

  methods: {
    exitNav() {
      let clickEvent = new Event("click");
      document.querySelector(".btn-close").dispatchEvent(clickEvent);
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 20px;
  font-family: "Edu SA Beginner", cursive;
  font-size: 110%;
  scroll-behavior: smooth;
  transition: smooth;
  cursor: none !important;
  cursor: url(../src/assets/cursor/select.cur);
}
:root {
  --sixty: #2a52be;
  --bg: #2a52beba;
  --thirty: #efefef;
  --acc: #5f0763;
  --ss: 1%;
  --se: 1em;
  --snx: 30vw;
  --height: 80vh;
  --width: 70vw;
  --sny: 40vh;
  --mute: #00000000;
  --cursor:#e600ff;
}
.cursor {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid black;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: 1000 !important;
}

.cursor2 {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color:var(--acc);
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width .3s, height .3s, opacity .3s;
  z-index: 40;
}

.hover {
  background-color: red;
  opacity: 0.5;
}

.cursorinnerhover {
  width: 50px;
  height: 50px;
  opacity: .5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  position: fixed;
  top: 0;
  display: flex;
  padding: 1%;
  z-index: 10;
  background-color: var(--bg);
  border: 2px solid var(--acc);
}

nav {
  position: fixed;
  top: 0;
  z-index: 5;
  height: 100%;
  width: 100vw;
  background-color: var(--bg);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1%;
  transform-origin: top;
  transform: scale(0);
}
nav > * {
  padding: 1%;
  z-index: 10;
  background-color: var(--bg);
  border: 2px solid var(--acc);
  border-radius: 20px;
}
nav.active {
  transform: scale(1);
}
#target {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--snx);
  background-color: var(--sixty);
  transform-origin: top;
  transform: scale(0);
}

#target.miniNotepad {
  transform: scale(1);
}

nav a {
  font-weight: bold;
  color: var(--thirty);
  text-decoration-line: none;
}

nav a.router-link-exact-active {
  color: var(--acc);
}
footer {
  display: flex;
  position: fixed;
  bottom: 0;
}
footer > * {
  margin: var(--ss);
  padding: var(--ss);
  text-decoration-line: none;
}
button {
  margin: var(--ss);
  padding: var(--ss);
  background-color: var(--mute);
  box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px var(--acc);
  color: var(--acc);
  width: fit-content;
}
</style>
