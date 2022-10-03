<template >

 <div id="contactBody">
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
        <button type="submit"> &#8658;</button>
      <div id="contactButtons">
      <a href="mailto:aztoorabally7447@gmail.com" target="_blank" rel="noopener noreferrer"> &#9993;</a>
      <a href="https://www.linkedin.com/in/abdool-zaid-toorabally-004921237/" target="_blank" rel="noopener noreferrer">
        <img src="https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/LinkedIn-Logos/LinkedIn-Logos/LI-In-Bug.png" alt="linkedin" id="contactLogo">
      </a>
      <a href="tel:+27621213907" rel="noopener noreferrer">&#9742;</a>
      </div>
    </form>
        </div>
  </div>
</template>
<script>
 
export default {
      name: 'contactForm',
}
</script>
<style scoped >
#contactHeader{
  margin-top: var(--se);
}

  #formBody{
    font-size: small;
    width: 94vw;
    height: 100vh;
    display: flex;
    justify-content: center;
}
form {
    display: flex;
  height: var(--height);
  width: var(--width);
  flex-direction: column;
  flex-wrap: wrap;
    justify-content: space-evenly;
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
#contactButtons{
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color:var(--mute);
width: fit-content;
border: 2px dashed var(--acc);
font-size: 1rem;
}
#contactLogo{
  width: 1em;
  aspect-ratio: 1;
  background-color: var(--thirty);
  
}
form >*:focus{
outline: var(--mute);
}
form :nth-child(1){
    color: var(--acc);
}
form >button{
  font-size: 1rem;
    background-color:var(--mute);
    box-shadow:  2px 2px 6px #bebebe,
             -2px -2px 6px var(--acc);
    color: var(--acc);
    width: fit-content;
  margin: var(--se);
  padding: var(--se);
   
}
a{
  margin: var(--se);
  padding: var(--se);
    background-color:var(--mute);
    box-shadow:  2px 2px 6px #bebebe,
             -2px -2px 6px var(--acc);
    color: var(--acc);
    width: fit-content;
      text-decoration-line: none;
}

/* media Querries */
 @media only screen and (max-width: 1020px) {

        #contactButtons{
          padding: var(--ss);
            flex-direction: row;
        }       
        form{
          flex-direction: row;
        } 
    }
    @media only screen and (max-width: 420px) {
      #contactButtons{
          margin: var(--ss);
            flex-direction: row;
        }        
        #contactBody{
          margin-top:2em ;
font-size:0.8em;
        }
    }
</style>    