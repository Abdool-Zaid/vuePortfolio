<template>
<div v-on="scroll">
  <h3 @click="exitNav()" >
    logo
  </h3>
  <nav id="nav">
    <router-link  @click="exitNav()"  to="/">Home</router-link>
    <router-link  @click="exitNav()" to="/about">About</router-link>
    <router-link  @click="exitNav()" to="/skills">skills</router-link>
    <router-link  @click="exitNav()" to="/resume">resume</router-link>
    <router-link  @click="exitNav()" to="/projects">projects</router-link>
    <router-link  @click="exitNav()" to="/testimonials">testimonials</router-link>
    <router-link  @click="exitNav()" to="/contact">contact</router-link>
    <div>
      <h3 @click="exitNav()">X</h3>
    </div>
  </nav>
  <router-view />

  <footer>
    <router-link to="/contact">
      <p>contact</p>
    </router-link>
  </footer>
      </div>
</template>
<script>
export default {
  mounted() {
  window.addEventListener('scroll',()=>{
        console.log(scrollY)
      })
},
  methods: {
    exitNav() {
      document.getElementById("nav").classList.toggle("active");
      console.log("active", Math.random() * 10);
    },
  
    
  },
  computed:{
    
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --sixty: #2A52BE;
  --thirty: #C8BDAF;
  --acc: #5F0763;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: absolute;
  top: 0;
  z-index: 5;
  height: 100%;
  width: 100vw;
  background-color: #d2a4e9a3;
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

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
footer {
  position: fixed;
  bottom: 0;
}
</style>
