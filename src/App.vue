<template>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap"
    rel="stylesheet"
  />
  
  <div v-on="scroll">
    <div id="logo">
      <h3 @click="exitNav()">Abdool Zaid</h3>
    </div>
    <div id="target">
      <ul id="notepadItems">
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
    <nav id="nav">
      <router-link @click="exitNav()" to="/">Home</router-link>
      <router-link @click="exitNav()" to="/about">About</router-link>
      <router-link @click="exitNav()" to="/skills">skills</router-link>
      <router-link @click="exitNav()" to="/resume">resume</router-link>
      <router-link @click="exitNav()" to="/projects">projects</router-link>
      <router-link @click="exitNav()" to="/testimonials"
        >testimonials</router-link
      >
      <router-link @click="exitNav()" to="/contact">contact</router-link>
      <div>
        <h3 @click="exitNav()">X</h3>
      </div>
    </nav>
    <router-view />



    <footer>
      <router-link to="/contact">
        <p>contact</p>
      </router-link>
      <a href="../assets/bedtime_story.pdf" download>bedtimeStory</a>
      <!-- <router-link to="/" tag="#logo"> scroll back</router-link> -->
      <router-link :to="{ path: '/'+'logo'}"><a >scrollBack</a></router-link>

    </footer>
  </div>
</template>
<script>


export default {

  
  methods: {
    exitNav() {
      document.getElementById("nav").classList.toggle("active");
      // console.log("active", Math.random() * 10);
    },
  },
  computed: {},
  
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
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 1%;
  transform-origin: top;
  transform: scale(0);
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
