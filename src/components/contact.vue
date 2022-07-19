<template >
 <div>
    <div id="contactHeader">
      <H1>contact me</H1>
    </div>
    <div id="formBody">

        <form action="https://formspree.io/f/xrgjnpzv" method="POST">
            <input type="name" name="name"  required  placeholder="Name"/>
      <input type="email" name="email"  required  placeholder="Email"/>
      <input type="company" name="company"  required  placeholder="Company"/>
      
      <textarea name="message" required placeholder="Message"></textarea>
      <textarea name="conatact" required placeholder="Optional contact information"></textarea>
      <button type="submit">Send</button>
    </form>
        </div>
  </div>
</template>
<script>
 
export default {
      name: 'contactForm',



}
</script>
<style >
  #formBody{
    display: flex;
    justify-content: center;
}
form {
    display: flex;
  height: 80vh;
  width: 70vw;
  flex-direction: column;
  flex-wrap: wrap;
    justify-content: center;
  align-content: stretch;
  align-items: center;
  background-color: var(--sixty);
}
form >*{
    margin: var(--ss);
    padding: var(--ss);
    background-color: var(--thirty);
    border-color: var(--mute);
    width: 80%;
}
form :nth-child(1){
    color: var(--acc);
}
form >button{
    background-color:var(--mute);
    border-color: var(--acc);
    width: fit-content;
   
}

</style>    