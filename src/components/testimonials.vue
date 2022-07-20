<template >
    <div id="header">
            <h1>Hear what people have to say about me</h1>
    </div>
    <div id="testimonialBody">
        <div class="testCard" v-for="testimonial in testimonials" :key="testimonial">
        <div class="introHead">
            <img :src="testimonial.image">
<h2>{{testimonial.name}}</h2>
<p class="minorDetail">{{testimonial.relate}}</p>
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
        testimonials: this.$store.state.testimonials
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
.minorDetail{
    font-size: 90%;
    color: #132412a3;
}
img{
    border: 2px solid var(--thirty);
    border-radius: 50%;
    width: 10vw;
    aspect-ratio: 1 ;
}
</style>