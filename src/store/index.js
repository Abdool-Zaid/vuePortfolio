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
        name: "",
        relate: "",
        testimonial: "",
        image: "",
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
      { name: "Public Speaking", level:936 },
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
          {
            skill: "Engineering Graphics and Design",
            level: 78,
            colour: "red",
          },
        ],
        duration: "5 years",
        link: "http://www.oudemolen.org.za/",
      },
      {
        name: "",
        jobTitle: "",
        desc: "",
        development: [{ skill: "", level: "", colour: "" }],
        link: "",
        contact: "",
      },
      {
        name: "",
        jobTitle: "",
        desc: "",
        development: [{ skill: "", level: "", colour: "" }],
        link: "",
        contact: "",
      },
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
