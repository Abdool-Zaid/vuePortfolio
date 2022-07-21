import { createStore } from "vuex";

export default createStore({
  state: {
    testimonials: [
      {
        name: "Jason Wandrag",
        relate: "Lecturer",
        testimonial: `I see a lot of potential in Abdool-Zaid as a developer. He
           seems to enjoy participating in class activities. I enjoy to
           see him determined to do well in his studies. I am excited
           about Abdool-Zaid's potential and I can't wait to see how he
           will grow in the future.`,
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/jason.jpg",
      },
      {
        name: "Shinoa",
        relate: "Friend",
        testimonial: `Quirky, determined, inquisitive, and a problem solver.`,
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/shinoa.jpg",
      },
      {
        name: "Gabriel",
        relate: "Friend",
        testimonial: `Zaïd has a work ethic that is beyond human, he's an
           incomparable asset in all fields of work. He's like a well
           oiled machine, he will do twice the amount of work in half the
           time`,
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/gabe.jpeg",
      },
      {
        name: "Mika",
        relate: "colleague",
        testimonial: `Abdool is an eccentric, but a dedicated worker. He always puts in extra effort and often does more than what's expected of him.`,
        image:
          "https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/Mika%20(3).JPG",
      },
      {
        name: "Tristan",
        relate: "fellow bread enjoyer",
        testimonial: `"Abdool is a real inspiration and has an incredible work ethic. His bubbly personality and great charisma will allow him to thrive in any workplace."
        `,
        image: "https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/Tristan.JPG",
      },
      {
        name: "",
        relate: "",
        testimonial: "",
        image: "",
      },
    ],
    skills: [
      { name: "html", level: 90 },
      { name: "English", level: 90 },
      { name: "Japenese", level: 12 },
      { name: "CSS", level: 78 },
      { name: "JavaScript", level: 75 },
      { name: "MySQL", level: 94 },
      { name: "vue", level: 60 },
      { name: "Communication", level: 74 },
      { name: "Time Management", level:85 },
      { name: "Problem-Solving", level:96 },
      { name: "Public Speaking", level:93 },
    ],
    resume: [
      {
        name: "Oude Molen",
        jobTitle: "Student",
        desc: `Here I gained basic competencies in English, Math, Afrikaans, Life Orientaion, physical Sciences, biology, Electrical Engineering and Engineering Graphics and design.`,
        development: [
          { skill: "english", level: 90, colour: "red" },
          { skill: "Math", level: 80, colour: "orange" },
          { skill: "Afrikaans", level: 70, colour: "yellow" },
          { skill: "Life Orientation", level: 80, colour: "green" },
          { skill: "Physical Sciences", level: 75, colour: "blue" },
          { skill: "Biology", level: "73", colour: "indigo" },
          { skill: "Electrical Engineering", level: 82, colour: "violet" },
          { skill: "Engineering Graphics and Design", level: 78,colour: "red"},
        ],
        duration: "5 years",
        link: "http://www.oudemolen.org.za/",
      },
      {
        name: "south african radio league",
        jobTitle: "Student",
        desc: "I studied for my Harmonised amateur radio examination certificate",
        development: [{ skill: "elcectrical engineering", level: 72, colour: "orange" }],
        duration: "6 months",
        link: "https://www.facebook.com/officialsarl/",
      },
      {
        name: "Frontline Sound & Lighting",
        jobTitle: "assitant Audio technician",
        desc: `my job entailed setting up the workshop for the day taking caring of primary failures on power systems, snakes, microphones,speaker units aswell as the amps `,
        development: [{ skill: "electrical engineering", level: 83, colour: "yellow" }],
        duration: "2 years",
        link: "",
      },
      {
        name: "perfect Live",
        jobTitle: "assitant Audio technician",
        desc: `my job entailed setting up the workshop repairing cd drives amps and speakers`,
        development: [{ skill: "electrical engineering", level: 89, colour: "green" }],
        duration: "5 months",
        link: "",
      },
      {
        name: "Self Study",
        jobTitle: "student",
        desc: `I took it upon mysself to learn Japenese`,
        development: [{ skill: "Japenese", level: 12, colour: "blue" }],
        duration: "till present",
        link: "",
      },
      {
        name: "Oude molen",
        jobTitle: " Teacher's assitant",
        desc: `here I my job included manageing all printing material textbooks and supervising the workshops and the school audio equipment`,
        development: [
          { skill: "time Management", level: 89, colour: "indigo" },
          { skill: "communication", level: 82, colour: "violet" },
          { skill: "Microsoft excel", level: 42, colour: "red" },
        ],
        duration: "2 years",
        link: "http://www.oudemolen.org.za/",
      },
      {
        name: "life Choices",
        jobTitle: "Student",
        desc: `Here I studied to be a FullStack Developer`,
        development: [
          { skill: "Html", level: 95, colour: "orange" },
          { skill: "CSS", level: 72, colour: "Yellow" },
          { skill: "JavaScript", level: 48, colour: "green" },
          { skill: "MySQL", level: 94, colour: "blue" },
          { skill: "VueX", level: 64, colour: "indigo" },
        ],
        duration: "6 months",
        link: "https://www.lifechoices.co.za/",
      },
    ],
    projects:[
{name:"calculator",
description:"a simple calculator I made",
preView:"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/calc.PNG",
liveLink:"https://aztcalc.netlify.app/",
githubLink:"https://github.com/Abdool-Zaid/calculator",
  techStack:"Html,CSS,JavaScript",
},
{name:"graceFeelsretreat",
description:"a property listing Site that sells planets",
preView:"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/grace.png",
liveLink:"https://gracefeelsretreat.netlify.app/",
githubLink:"https://github.com/Abdool-Zaid/propertyListing",
  techStack:"Html,CSS,JavaScript",
},
{name:"bmi calculator",
description:"use at own risk",
preView:"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/bmi.png",
liveLink:"https://aztbmicalculator.netlify.app/",
githubLink:"https://github.com/Abdool-Zaid/BMIcalc",
  techStack:"Html,CSS,JavaScript",
},
{name:"restuarant",
description:"a group project we did to learn how to work in teams on github",
preView:"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/team.PNG",
liveLink:"https://cheery-yeot-b032ba.netlify.app/",
githubLink:"https://github.com/Abdool-Zaid/jhd",
  techStack:"Html,CSS,",
},
{name:"day organiser",
description:"a to-do list I made to help oragnise my day and learn Crud functionality",
preView:"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/toDo.png",
liveLink:"https://aztorganiser.netlify.app/",
githubLink:"https://github.com/Abdool-Zaid/to-do-list",
  techStack:"Html,CSS,JavaScript",
},
{name:"my first website",
description:"a rudimentary webite I built with only html to start my journey as a Fullstack developer",
preView:"https://raw.githubusercontent.com/Abdool-Zaid/vuePortfolio/main/src/assets/first.png",
liveLink:"https://darling-zuccutto-ca7cfc.netlify.app/",
githubLink:"https://github.com/Abdool-Zaid/Portfolio",
  techStack:"Html",
}
    ],
    lastval: window.addEventListener("scroll", () => {
      return Math.ceil(scrollY);
    }),
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
