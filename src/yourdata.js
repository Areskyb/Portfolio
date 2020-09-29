import profile from "./files/profile.jpg";
import bag from "./files/bag.png";
import farm from "./files/farm.png";
import kanban from "./files/kanban.png";
import pi from "./files/1000pi.png";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "aresky.",
  headerTagline: [
    //Line 1 For Header
    "Hello 👋  World! I am Aresky Berkane.",
    //Line 2 For Header
    "Junior Software Engineer ",
    //Line 3 For Header
    "from Spain",
  ],
  //Contact Email
  contactEmail: "areskyberkane@gmail.com",
  // Add Your About Text Here
  abouttext:
    "After graduating with a Higher National Diploma in Software and working within a hospitality organisation for 2 years, I made the decision to pursue a career in Technology. This fascination with tech started long before my GCE in Science and,while considering my options with the hospitality sector, I realised Technology could provide me with so many more op  portunities to nutrure my growth mindset and a love for problem solving.",
  aboutImage: profile,
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)ß
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "1000π", //Project Title - Add Your Project Title Here
      service: "Web Teaching Platform (React.js, Firebase)", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: pi,
      //Project URL - Add Your Project Url Here
      url: "https://pi-4a942.firebaseapp.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Virtual Garden",
      service: "Web Game, HND Group Project (Vue.js, Java Spring)",
      imageSrc: farm,
      url: "https://github.com/Areskyb/Virtual_Garden_project",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Kanban Clone",
      service: "Simple Kanban Clone(Angular 8,Firestore,Auth)",
      imageSrc: kanban,
      url: "https://my-web-77082.firebaseapp.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "The Lazy Nomad",
      service: "First HND Solo project (Ruby)",
      imageSrc: bag,
      url: "https://github.com/Areskyb/ruby_project",
    },

    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: "Github", url: "https://github.com/Areskyb" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/aresky-berkane/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/areskyberkane/",
    },
    {
      name: "+34 629830351",
      url: "",
    },
  ],
};
