<template >
    <div id="header">
            <h1>Hear what people have to say about me</h1>
    </div>
    <div id="testimonialBody">
        <div class="testCard" v-for="testimonial in testimonials">
        <div class="introHead">
            <img :src="testimonial.image">
<h2>{{testimonial.name}}</h2>
<h4>{{testimonial.relate}}</h4>
        </div>
<P>{{testimonial.testimonial}}</P>
        </div>
    </div>
</template>
<script>
export default {
      name: 'testimonials',
data() {
    return {
        testimonials:[
             {
        "name":"Jason Wandrag",
        "relate":"Lecturer",
        "testimonial":`I see a lot of potential in Abdool-Zaid as a developer. He
                  seems to enjoy participating in class activities. I enjoy to
                  see him determined to do well in his studies. I am excited
                  about Abdool-Zaid's potential and I can't wait to see how he
                  will grow in the future.`,
        "image":"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/jason.jpg"
    },
    {
        "name":"Shinoa",
        "relate":"Friend",
        "testimonial":`Quirky, determined, inquisitive, and a problem solver.`,
        "image":"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/shinoa.jpg"
    },
    {
        "name":"Gabriel",
        "relate":"Friend",
        "testimonial":`Zaïd has a work ethic that is beyond human, he's an
                  incomparable asset in all fields of work. He's like a well
                  oiled machine, he will do twice the amount of work in half the
                  time`,
        "image":"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/gabe.jpeg"
    },
    {
        "name":"Mika",
        "relate":"colleague",
        "testimonial":`Abdool is an eccentric, but a dedicated worker. He always puts in extra effort and often does more than what's expected of him.`,
        "image":"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/Mika%20(3).JPG"
    },
    {
        "name":"",
        "relate":"",
        "testimonial":"",
        "image":""
    },
    {
        "name":"",
        "relate":"",
        "testimonial":"",
        "image":""
    }

        ]
    }
},
}
</script>
<style  scoped>
#header{
background-color: var(--sixty);
padding: var(--ss);
}
#testimonialBody{
    display: flex;
    flex-direction: column;
align-items: center;
}
.testCard{
    margin: var(--ss);
    padding: var(--ss);
    display: flex;
    flex-direction: column;
    width: var(--width);
     background-color:var(--sixty);
    box-shadow:  2px 2px 6px #bebebe,
             -2px -2px 6px var(--acc);
    color: var(--thirty);

}
img{
    border: 2px solid var(--thirty);
    border-radius: 50%;
    width: 10vw;
    aspect-ratio: 1 ;
}
</style>