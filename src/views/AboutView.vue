<template>
  <div id="aboutBody">
    <div id="aboutlanding">
      <video src="../assets/about.mp4" autoplay loop></video>
    </div>
       <a href="../assets/cv abdool zaid toorbally.pdf" download><button >Download Resume</button></a>
  </div>
</template>
<script>
export default {};
</script>
<style>
#aboutBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#aboutLanding {
  height: var(--height);
  width: var(--width);
  margin:var(--ss);
  padding:var(--ss);
}
video {
  margin:var(--ss);
  padding:var(--ss);
    box-shadow:  2px 2px 6px #bebebe,
             -2px -2px 6px var(--acc);
  border-radius: 20px;

  height: var(--height);
  width: var(--width);
}
</style>
