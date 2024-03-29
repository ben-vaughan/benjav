import About from "../components/About";
import LineList from "../components/LineList";
import IconList from "../components/IconList";
import "../css/pages/Home.css"

let experience = {
  title: 'experience',
  fields: [
    {
      heading: 'NoCo',
      title: 'Product Engineer',
      subtitle: 'August 2022 - Present',
      description: "Developing and maintaining an online platform's front-end and back-end. Created database architecture & security using AWS. Implemented various AWS Lambda functions to populate the database, and retrieve those values to display on the front-end. Developed an in-house API to access the relational database."
    },
    {
      heading: 'KPMG',
      title: 'Applied Intelligence Consultant',
      subtitle: 'June 2022 - July 2022',
      description: "Engaged in various courses on topics such as Data Science and Machine Learning. Created a large randomised dataset using Python, transformed and parsed it, then visualised it using Microsoft Power BI."
    },
    {
      heading: 'Fonz Music',
      title: 'Co-Founder',
      subtitle: 'July 2020 - January 2022',
      description: "Created a new way to share and play music with friends using NFC technology. Developed our website using Vue and the Google Firebase suite. Implemented user authentication, analytics and a real-time NoSQL database. Designed mockups, packaging, and UX/UI for Fonz iOS and Android app. Accepted into Tangent's LaunchBox accelerator, receiving €15,000 in funding."
    }
  ]
};
let education = {
  title: 'education',
  fields: [
    {
      heading: 'Trinity College Dublin',
      title: 'BA (Mod) Major Computer Science, Minor Business',
      subtitle: 'September 2019 - Present',
      description: "Currently in my Senior Sophester (4th year). Majoring in Computer Science with a minor in Business, focusing on finance, quantitative skills and accountancy."
    }
  ]
}
let expertise = {
  title: "expertise",
  fields: [
    {
      description: "I've extensively used Python for data processing, database manipulation and API implementation. Currently diving into Machine Learning, which has lead to a love for the pandas and numpy packages.",
      imageURI: "pyLogo"
    },
    {
      description: "I've recently jumped in to the Amazon Web Services platform, and have picked it up quickly. I've successfully set up relational MySQL databases, created VPCs, EC2 instances, API Gateways and more.",
      imageURI: "awsLogo"
    },
    {
      description: "The website you're looking at is built with React! I have extensive experience with the Vue.js framework too, having built an online store which integrates Stripe for my previous startup, Fonz.",
      imageURI: "reactLogo"
    },
    {
      description: "I'm thoroughly experienced with JavaScript, having used it in various web development projects, alongside creating scripts to extract data from various APIs.",
      imageURI: "jsLogo"
    },
    {
      description: "I've been using the Adobe suite since I was 16 years of age, with a particular love for Illustrator and XD. I've plenty of experience with graphic design and branding.",
      imageURI: "aiLogo"
    }
  ]
}

function Home() {
  return(
    <>
    <div className="content-outer">
      <div className="content-inner">
        <About/>
        <div className="home-container">
          <div>
            <LineList data={experience}/>
          </div>
          <div>
            <LineList data={education}/>
            <IconList data={expertise}/>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home;