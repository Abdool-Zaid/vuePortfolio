<template>
<h3 @click="exitNav()">logo</h3>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/skills">skills</router-link>|
    <router-link to="/resume">resume</router-link>|
    <router-link to="/projects">projects</router-link>|
    <router-link to="/testimonials">testimonials</router-link>|
    <router-link to="/contact">contact</router-link>
    <div>
<h3 @click="exitNav()"> X </h3>
    </div>
  </nav>
  <router-view />

  <footer>
    <router-link to="/contact">
      <p>contact</p>
    </router-link>
  </footer>
</template>
<script>
export default{
  methods:{
    exitNav(){
console.log("active", Math.random()*10)
}
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  z-index: 5;
  height: 100%;
  background-color: #d2a4e9;
  display: flex;
  padding: 30px;
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
