import '../css/Experience.css'
import ListElement from './elements/ListElement';

let noco = {
  firm: 'NoCo',
  title: 'Product Engineer',
  date: 'August 2022 - Present',
  description: "Developing and maintaining an online platform's front-end and back-end. Created database architecture & security using AWS. Implemented various AWS Lambda functions to populate the database, and retrieve those values to display on the front-end. Developed an in-house API to access the relational database. "
}
let kpmg = {
  firm: 'KPMG Ireland',
  title: 'Applied Intelligence Team (Intern)',
  date: 'June 2022 - July 2022',
  description: 'Engaged in various courses on topics such as Data Science and Machine Learning. Created a large randomised dataset using Python, transformed and parsed it, then visualised it using Microsoft Power BI.'
}
let fonz = {
  firm: 'Fonz Music',
  title: 'Co-Founder',
  date: 'July 2020 - January 2022',
  description: "Created a new way to share and play music with friends using NFC technology. Developed our website using Vue and the Google Firebase suite. Implemented user authentication, analytics and a real-time NoSQL database. Designed mockups, packaging, and UX/UI for Fonz iOS and Android app. Accepted into Tangent's LaunchBox accelerator, receiving €15,000 in funding."
}

function Experience() {
  return (
    <div>
      <div className='heading-0'> experience </div>
      <div className='experience-outer'>
        <div className='experience-details'>
          <ListElement firm={noco.firm} date={noco.date} title={noco.title} description={noco.description}/>
          <ListElement firm={kpmg.firm} date={kpmg.date} title={kpmg.title} description={kpmg.description}/>
          <ListElement firm={fonz.firm} date={fonz.date} title={fonz.title} description={fonz.description}/>
        </div>
      </div>
    </div>
  )
}

export default Experience;