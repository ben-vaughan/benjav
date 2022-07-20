import About from "../components/About";
import LineList from "../components/LineList";
import IconList from "../components/IconList";

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
      title: 'BA Major Computer Science, Minor Business',
      subtitle: 'September 2019 - Present',
      description: "Created a new way to share and play music with friends using NFC technology. Developed our website using Vue and the Google Firebase suite. Implemented user authentication, analytics and a real-time NoSQL database. Designed mockups, packaging, and UX/UI for Fonz iOS and Android app. Accepted into Tangent's LaunchBox accelerator, receiving €15,000 in funding."
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
      description: "I've recently jumped in to the Amazon Web Services platform, and have picked it up quickly. I've successfully set up relational MySQL databases, created VPCs, EC2 instances, API Gateways and more. Planning to take the AWS Certified Cloud Practitioner examination to solidify my skills. ",
      imageURI: "awsLogo"
    },
    {
      description: "I've recently jumped in to the Amazon Web Services platform, and have picked it up quickly. I've successfully set up relational MySQL databases, created VPCs, EC2 instances, API Gateways and more. Planning to take the AWS Certified Cloud Practitioner examination to solidify my skills. ",
      imageURI: "reactLogo"
    },
    {
      description: "I've recently jumped in to the Amazon Web Services platform, and have picked it up quickly. I've successfully set up relational MySQL databases, created VPCs, EC2 instances, API Gateways and more. Planning to take the AWS Certified Cloud Practitioner examination to solidify my skills. ",
      imageURI: "aiLogo"
    }
  ]
}

function Home() {
  return(
    <>
      <About/>
      <div style={{display: 'inline'}}>
        <LineList data={experience}/>
        <LineList data={education}/>
        <IconList data={expertise}/>
      </div>
    </>
  )
}

export default Home;