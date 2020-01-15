const events = [
  {
    name: "Virtual Crowdfunding",
    image: "https://iecnmims.in/Inceptio/images/cw.jpg",
    description: "Our flagship event, this is about making something great happen, with the help of people who believe in you and what you have to offer!"
  },
  {
    name: "Inceptio Talks",
    image: "https://iecnmims.in/Inceptio/images/inceptiotalks.png",
    description: "A perfect way to start off the Innovation and Entrepreneurship Carnival, this speaker session aims to trigger an innovative mindset and raise awareness about practical and revolutionary ideas in the business world."
  },
  {
    name: "Live Project Competition",
    image: "https://iecnmims.in/Inceptio/images/lp.jpg",
    description: "Innovation is for improving the lives of others and for leaving your community and world better than you found it"
  },
  {
    name: "Product/Service Showcase",
    image: "https://iecnmims.in/Inceptio/images/ps.jpg",
    description: "Established startups visiting the campus will be presenting their products.With the purpose of improving students’ understanding of various aspects of the product, the event promises to help students learn more about the industry"
  },
  {
    name: "Biz Quiz",
    image: "https://iecnmims.in/Inceptio/images/bq.jpg",
    description: "This is a quiz competition to test the entrepreneurship knowledge and business sense of the participants"
  },
  {
    name: "Ideation Workshop",
    image: "https://iecnmims.in/Inceptio/images/iw.jpg",
    description: "This workshop aims at helping people come up with ingenious and profitable business ideas. The workshop will be conducted in 3 brief stages. The first stage will consist of an interactive session on idea generation."
  },
  {
    name: "Think Tank",
    image: "https://iecnmims.in/Inceptio/images/tt.jpg",
    description: "This event is designed to provide students with an opportunity to interact with the members of leading companies and organizations, get to know more about the present business scenario and learn different methods to tackle real- life problems."
  },
  {
    name: "Idea Validation Workshop",
    image: "https://iecnmims.in/Inceptio/images/iv.jpg",
    description: "If you are someone whose mind is brimming with ingenious ideas but you’re apprehensive about what you must do next and whether your idea will even be worth all the trouble, this is one workshop you need to attend."
  },
  {
    name: "Ideation Workshop",
    image: "https://iecnmims.in/Inceptio/images/iw.jpg",
    description: "This workshop aims at helping people come up with ingenious and profitable business ideas. The workshop will be conducted in 3 brief stages. The first stage will consist of an interactive session on idea generation."
  },
  {
    name: "B-Plan Writing Workshop",
    image: "https://iecnmims.in/Inceptio/images/bp.jpg",
    description: "The purpose of this workshop is to help participants formulate a concrete plan of action with regard to their idea with the help of experts. Start-ups and aspiring entrepreneurs would be provided with proper guidance."
  },
  {
    name: "Digital Marketing",
    image: "https://iecnmims.in/Inceptio/images/dm.jpg",
    description: "We all use Google and a host of social networking applications every single day, and yet don't know that they show us content they know we know we want to see! "
  },
  {
    name: "Creativity Workshop",
    image: "https://iecnmims.in/Inceptio/images/creativitywebsite1.png",
    description: "Relaxed environment where students can delve into their creative instincts, and discover their potential as out-of-the-box thinkers and doers!"
  }
];

const event = ({name, image, description}) => {
  return `<div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
  <div class="card-speaker">
    <img class="card-img rounded-0" src="${image}" alt="">
    <div class="speaker-footer">
      <h4>${name}</h4>
    </div>
    <div class="speaker-overlay">
      <ul class="speaker-social">
      <p class="speaker-description">${description}</p>
      </ul>
    </div>
  </div>
</div>`;
}

$(document).ready(function(){
  $("#events-arena").html(events.map(p => event({ ...p }) ).join(" ") )
})