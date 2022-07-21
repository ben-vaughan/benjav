import CleanList from "../components/CleanList";

const data = {
  heading: 'contact',
  fields: [
    {
      name: 'e-mail',
      value: "me@benjav.com",
    },
    {
      name: 'github',
      value: "ben-vaughan",
    }
  ]
}

function Contact() {
  return(
    <>
      <CleanList data={data}/>
    </>
  )
}

export default Contact;