<template >
   <div>
       resume page
    </div>
    <div id="resumeBody">
        <div class="jobCard" v-for="job in resume" :key="job">
        <h1>{{job.name}}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name:'resume    ',
    data() {
        return {
        resume: this.$store.state.resume
        }
    },
}
</script>
<style >
#resumeBody{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.jobCard{
    margin: var(--se);
    padding: var(--se);
    background-color: var(--thirty);
    color: var(--sixty);
    /* border: 3px solid var(--acc); */
        box-shadow:  2px 2px 6px #bebebe,
             -2px -2px 6px var(--acc);
}
    
</style>